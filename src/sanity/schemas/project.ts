import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  description: 'R&D projects displayed on the homepage and projects page.',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active Research', value: 'Active Research' },
          { title: 'In Development', value: 'In Development' },
          { title: 'Hardware', value: 'Hardware' },
          { title: 'Demo Ready', value: 'Demo Ready' },
          { title: 'Completed', value: 'Completed' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo / External URL',
      type: 'url',
    }),
  ],
});
