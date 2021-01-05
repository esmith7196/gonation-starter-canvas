import React from 'react';
import { Button, Text, Textarea, Input } from 'theme-ui';

export default function EventForm({ formName }) {
  return (
    <form
      name='Contact Form'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      enctype='application/x-www-form-urlencoded'>
      <Input type='hidden' name='form-name' value='Private Events' />
      <Input type='hidden' name='subject' value='FROM PRIVATE EVENTS FORM' />
      <Input name='User name' id='name' mb={3} placeholder='Name' />
      <Input
        type='email'
        name='User Email'
        id='email'
        mb={3}
        placeholder='Email'
      />
      <Input
        type='phone'
        name='User Phone'
        id='phone'
        mb={3}
        placeholder='Phone'
      />

      <Textarea
        name='Message'
        id='message'
        rows='6'
        mb={3}
        sx={{ fontFamily: 'heading' }}
        placeholder='Message'
      />
      <Button name='submit' variant='primary' sx={{ width: '100%' }}>
        Submit
      </Button>
    </form>
  );
}
