export default {
  name: 'Illustration',
  title: 'Illustration',
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
      title: 'MainImage',
      type: 'richImage'
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
      description: 'The time the illustration was created',
      type: 'date',
      dateFormat: 'YYYY-MM',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockSimple',
      description: 'A short description of the illustration',
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
