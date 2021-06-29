import React, { useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';

import { deleteOne } from "../../services/api";

export default function ListToDo({ todos, selectTodoMenu }) {
  const [listTodos, setListTodos] = useState([]);

  const deleteTodo = (id, index) => {
    deleteOne('todo/'+id);
    var newList = listTodos;
    newList.splice(index, 1);
    setListTodos(newList);
  }

  useEffect(() => {
    if(todos) setListTodos(todos);
  }, [todos]);

  return (
    
    <MenuList>
      {!!todos && listTodos.map((todo, index) => (
        <MenuItem onClick={() => selectTodoMenu(todo)} key={index}>
          <Grid container >
            <Grid item xs={12} md={8} lg={9}>
              { todo.description } 
            </Grid>
            <Grid item xs={12} md={4} lg={3}> <DeleteIcon onClick={() => deleteTodo(todo._id, index)} /> <ShareIcon />  </Grid>
          </Grid>
        </MenuItem>
      ))}
    </MenuList>
  );
}
