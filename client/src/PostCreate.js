import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='id' />
        <TextInput multiline source='title' />
        <TextInput multiline source='price' />

      </SimpleForm>
    </Create>
  )
}

export default PostCreate