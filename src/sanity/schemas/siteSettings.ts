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
      validation: (Rule) => Rule.required(),
      initialValue: 24,
    }),
    defineField({
      name: 'rdProjects',
      title: 'R&D Projects Count',
      type: 'number',
      validation: (Rule) => Rule.required(),
      initialValue: 3,
    }),
    defineField({
      name: 'eventsHosted',
      title: 'Events Hosted Count',
      type: 'number',
      validation: (Rule) => Rule.required(),
      initialValue: 5,
    }),
    defineField({
      name: 'foundedYear',
      title: 'Founded Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
      initialValue: 2024,
    }),
  ],
});
