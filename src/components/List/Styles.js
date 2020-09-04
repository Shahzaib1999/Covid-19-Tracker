import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    // maxHeight: window.innerHeight * .55,
    height: window.innerHeight * .55,
    maxHeight: window.innerHeight * .55,
    overflowY: 'scroll',
    paddingLeft: 10
  },
}));