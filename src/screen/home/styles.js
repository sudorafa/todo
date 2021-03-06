import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
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
    height: 20,
  },
  name: {
    width: 400,
  },
  button: {
    marginLeft: 20,
  },
}));
