import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'timelinePhase',
  title: 'Roadmap',
  type: 'document',
  fields: [
    defineField({
      name: 'phase',
      title: 'Phase Number/Label',
      type: 'string',
      description: 'e.g., "01" or "Phase 1"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Active', value: 'active' },
          { title: 'Future', value: 'future' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
