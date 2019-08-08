export default {
  name: 'richImage',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'This is for accessibility',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true,
      }
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      }
    }
  ],
  options: {hotspot: true}
}