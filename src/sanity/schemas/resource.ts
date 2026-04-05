import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resource',
  title: 'Resources',
  type: 'document',
  description: 'Guides, repos, downloads, and slides shared with members on the resources page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Hardware', value: 'Hardware' },
          { title: 'Software', value: 'Software' },
          { title: 'Datasets', value: 'Datasets' },
          { title: 'Tutorials', value: 'Tutorials' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Guide', value: 'guide' },
          { title: 'Repo', value: 'repo' },
          { title: 'Download', value: 'download' },
          { title: 'Slides', value: 'slides' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'File Upload',
      type: 'file',
      description: 'Upload a file directly (e.g. PDF, ZIP).',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Use this if the resource is an external link instead of an uploaded file.',
    }),
  ],
});
