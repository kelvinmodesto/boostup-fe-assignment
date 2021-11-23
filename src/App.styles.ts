import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
}));

export default useStyles;
