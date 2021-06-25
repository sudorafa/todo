import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import AppBarApp from './components/appBar'
import menus from './constants/menu'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        }
        { menu === menus.ABOUT &&
          <Container maxWidth="lg" className={classes.container}>
            SOBRE
          </Container>
        }
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