import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBarApp from './components/appBar'
import menus from './constants/menu'
import Copyright from './components/footer'
import Home from './screen/home'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const getTitleMenu = (menu) => {
  switch (menu) {
    case menus.TODO:
      return 'Tarefas';
    case menus.ABOUT:
      return 'Sobre';
    default:
      return 'Tarefas';
  }
}

export default function App() {
  const classes = useStyles();
  const [menu, setMenu] = React.useState(menus.TODO);

  const handleMenu = menu => {
    setMenu(menu);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarApp title={getTitleMenu(menu)} handleMenu={handleMenu}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        { menu === menus.TODO &&
          <Home />
        }
        { menu === menus.ABOUT &&
          <Container maxWidth="lg" className={classes.container}>
            SOBRE
          </Container>
        }

        <Box pt={4}>
          <Copyright />
        </Box>
        </main>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);