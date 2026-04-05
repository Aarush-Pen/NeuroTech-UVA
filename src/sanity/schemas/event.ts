import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  description: 'Upcoming and past workshops, socials, speakers, and other club events shown on the events page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time Display String',
      type: 'string',
      description: 'e.g., "6:00 PM EST"',
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
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Social', value: 'Social' },
          { title: 'Gen Bod', value: 'Gen Bod' },
          { title: 'Speaker', value: 'Speaker' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isArchived',
      title: 'Force Archive',
      type: 'boolean',
      description: 'Check to manually push this event to the past events archive regardless of date.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
});
