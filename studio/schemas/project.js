export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'richImage',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'projectCategory'}]
    },
    {
      name: 'stack',
      title: 'Stack',
      description: 'The tech stack',
      type: 'array',
      of: [{type: 'string'}],
      editModal: 'popover'
    },
    {
      name: 'code',
      title: 'Code',
      description: 'A link to the code',
      type: 'url'
    },
    {
      name: 'live',
      title: 'Live',
      description: 'A link to a live preview or demo',
      type: 'url'
    },
    {
      name: 'creationDate',
      title: 'Creation date',
      description: 'The time the project was created',
      type: 'date',
      dateFormat: 'YYYY-MM',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockSimple',
      description: 'A short description of the project',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockMedia'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage'
    }
  }
  
}
