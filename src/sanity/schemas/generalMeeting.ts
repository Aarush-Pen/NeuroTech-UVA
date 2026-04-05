import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'generalMeeting',
  title: 'General Meeting (Pinned Card)',
  type: 'document',
  description: 'Recurring general meeting info displayed as a pinned card at the top of the events page.',
  fields: [
    defineField({
      name: 'dayTime',
      title: 'Day and Time',
      type: 'string',
      description: 'e.g., "Every Monday · 7:00 PM"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
