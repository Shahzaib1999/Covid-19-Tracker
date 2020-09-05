import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    // maxHeight: window.innerHeight * .55,
    // height: window.innerHeight * .55,
    maxHeight: 420,
    overflowY: 'scroll',
    paddingLeft: 10
  },
  listWrapper: {
    backgroundColor: '#F5F6FA'
  },
}));