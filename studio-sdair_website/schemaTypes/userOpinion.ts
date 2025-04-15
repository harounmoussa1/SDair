export default {
    name: 'userOpinion',
    type: 'document',
    title: 'User Opinion',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'avis',
        type: 'text',
        title: 'avis'
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At'
      }
    ]
  }
  