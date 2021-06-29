import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';
import ListToDo from '../../components/list-to-do';
import Board from '../../components/board';
import { get, post } from "../../services/api";

export default function Home() {
  const classes = useStyles();
  const [todosState, setTodos] = useState([]);
  const [todoSelected, setTodoSelected] = useState(null);
  const [todoText, setTodoText] = useState("");

  const selectTodoMenu = todo => {
    setTodoSelected(todo);
  }

  const updateTodos = async id => {
    try {
      const { todos } = await get('todo');
      setTodos(todos);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os todos");
    }
  }

  useEffect(() => {
    async function getTodos() {
      try {
        if (!todoSelected) {
          const { todos } = await get('todo');
          setTodos(todos);
        }
      } catch (error) {
        alert("Ocorreu um erro ao buscar os todos");
      }
    }
    getTodos();
  }, [todoSelected]);

  const createTodo = async () => {
    if(todoText) {
      const { todo } = await post('todo', { description: todoText });
      setTodos([...todosState, todo])
    }
  }

  return (
    
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Criar lista de tarefas:
            <Box pt={4}>
              <Input onChange={(e) => { setTodoText(e.target.value); }} placeholder="Nome" className={classes.name} inputProps={{ 'aria-label': 'nome' }} />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={createTodo}
              >
                Criar
              </Button>
            </Box>

          </Paper>
        </Grid>
        {/* Tarefa para editar */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper >
          { todoSelected?._id &&
            <Board todoSelected={todoSelected} updateTodos={updateTodos} /> }
          </Paper>
        </Grid>
        {/* Listagem de To Do */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <Box paddingLeft={2} pt={2}>Lista de tarefas:</Box>
            <ListToDo todos={todosState} selectTodoMenu={selectTodoMenu} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
