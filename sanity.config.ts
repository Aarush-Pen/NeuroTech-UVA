import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { schemaTypes } from './src/sanity/schemas';
import { CustomDeleteAction } from './src/sanity/components/CustomDeleteAction';
import { CustomMediaInput } from './src/sanity/components/CustomMediaInput';
import DocumentListWithInfo from './src/sanity/components/DocumentListWithInfo';

interface CategoryConfig {
  schemaType: string;
  title: string;
  description: string;
  query: string;
}

const categories: CategoryConfig[] = [
  {
    schemaType: 'event',
    title: 'Events',
    description:
      'Upcoming and past workshops, socials, speakers, and other club events shown on the events page.',
    query: '*[_type == "event"] | order(date asc) { _id, "title": title, "subtitle": time }',
  },
  {
    schemaType: 'generalMeeting',
    title: 'General Meeting (Pinned Card)',
    description:
      'Recurring general meeting info displayed as a pinned card at the top of the events page.',
    query: '*[_type == "generalMeeting"] { _id, "title": dayTime, "subtitle": location }',
  },
  {
    schemaType: 'project',
    title: 'Projects',
    description: 'R&D projects displayed on the homepage and projects page.',
    query: '*[_type == "project"] | order(name asc) { _id, "title": name, "subtitle": status }',
  },
  {
    schemaType: 'resource',
    title: 'Resources',
    description:
      'Guides, repos, downloads, and slides shared with members on the resources page.',
    query: '*[_type == "resource"] | order(title asc) { _id, "title": title, "subtitle": category }',
  },
  {
    schemaType: 'timelinePhase',
    title: 'Roadmap',
    description: 'Timeline phases shown in the homepage roadmap section.',
    query: '*[_type == "timelinePhase"] | order(phase asc) { _id, "title": title, "subtitle": year }',
  },
];

function categoryListItem(S: any, cfg: CategoryConfig) {
  return S.listItem()
    .title(cfg.title)
    .schemaType(cfg.schemaType)
    .child(
      S.component(DocumentListWithInfo)
        .id(`${cfg.schemaType}-list`)
        .title(cfg.title)
        .options({
          description: cfg.description,
          schemaType: cfg.schemaType,
          query: cfg.query,
        })
        .child((childId: string) =>
          S.document().documentId(childId).schemaType(cfg.schemaType)
        )
    );
}

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'NeuroTech CMS',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'teamMember',
              title: 'Leadership',
              S,
              context,
            }),
            ...categories.map((cfg) => categoryListItem(S, cfg)),
            S.listItem()
              .title('Site Settings')
              .schemaType('siteSettings')
              .child(
                S.editor()
                  .id('siteSettings')
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]);
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      // Find the standard delete action and replace it with our prominent one
      const withoutDelete = prev.filter((a) => a.action !== 'delete');
      // If prevailing actions included delete, we append our custom one (usually true for documents)
      const hasDelete = prev.some((a) => a.action === 'delete');
      return hasDelete ? [...withoutDelete, CustomDeleteAction] : prev;
    },
  },

  form: {
    components: {
      input: (props) => {
        if (props.schemaType.name === 'image' || props.schemaType.name === 'file') {
          return CustomMediaInput(props as any);
        }
        return props.renderDefault(props);
      },
    },
  },
});

