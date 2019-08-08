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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}]
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
