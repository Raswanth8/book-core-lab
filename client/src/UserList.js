import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='password' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList