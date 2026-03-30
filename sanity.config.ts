import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { schemaTypes } from './src/sanity/schemas';
import { CustomDeleteAction } from './src/sanity/components/CustomDeleteAction';
import { CustomMediaInput } from './src/sanity/components/CustomMediaInput';

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
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'teamMember'
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

