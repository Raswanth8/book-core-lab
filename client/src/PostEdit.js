import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='price' />
        
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit