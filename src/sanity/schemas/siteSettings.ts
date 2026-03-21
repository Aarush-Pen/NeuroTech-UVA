import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'activeMembers',
      title: 'Active Members Count',
      type: 'number',
      description: 'Manually set the number of active members shown on the homepage.',
      validation: (Rule) => Rule.required(),
      initialValue: 24,
    }),
    defineField({
      name: 'foundedYear',
      title: 'Founded Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
      initialValue: 2024,
    }),
  ],
  __experimental_formPreviewTitle: false,
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
