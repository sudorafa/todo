import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';
import ListToDo from '../../components/list-to-do';
import Board from '../../components/board';

export default function Home() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Criar lista de tarefas:
            <Box pt={4}>
              <Input placeholder="Nome" className={classes.name} inputProps={{ 'aria-label': 'nome' }} />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Criar
              </Button>
            </Box>

          </Paper>
        </Grid>
        {/* Tarefa para editar */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper >
            <Board />
          </Paper>
        </Grid>
        {/* Listagem de To Do */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <Box paddingLeft={2} pt={2}>Lista de tarefas:</Box>
            <ListToDo />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
