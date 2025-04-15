export default {
    name: 'publicOpinion',
    type: 'document',
    title: 'Public Opinion',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'avis',
        type: 'text',
        title: 'avis'
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published At'
      }
    ]
  }
  