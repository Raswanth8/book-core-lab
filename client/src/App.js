import React from 'react';
import {Admin,Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest'; 
import PostList from './PostList.js';
import PostCreate from './PostCreate.js';
import PostEdit from './PostEdit.js';
import UserList from './UserList.js';
import UserCreate from './UserCreate.js';
import UserEdit from './UserEdit.js';



function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')} >
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit = {PostEdit}
       
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
     
    
  )
}


export default App;
