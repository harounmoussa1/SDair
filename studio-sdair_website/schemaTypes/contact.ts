export default {
    name: 'contact',
    title: 'Contact Form Submission',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'subject',
        title: 'Subject',
        type: 'string',
      },
      {
        name: 'notes',
        title: 'Message',
        type: 'text',
      },
      {
        name: 'submittedAt',
        title: 'Submitted At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  