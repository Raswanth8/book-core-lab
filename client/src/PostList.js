import { formatMs } from '@material-ui/core';
import React from 'react';
import {List,Datagrid,TextField,EditButton,DeleteButton, Edit} from 'react-admin';

const PostList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' ></TextField>
            <TextField source='title' ></TextField>
            <TextField source='price' ></TextField>
            <EditButton basePath='/posts'></EditButton>
            <DeleteButton basePath='/posts'></DeleteButton>
        </Datagrid>
    </List>
}

export default PostList;