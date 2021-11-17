import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(6),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  date: {
    marginTop: theme.spacing(3),
    width: 220
  }
}));

export default useStyles;
