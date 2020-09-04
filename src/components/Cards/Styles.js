import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  totalPaper: {
    padding: theme.spacing(2),
    background: '#DCE9FF',
    borderRadius: 10
  },
  totalPaperText:{
    fontWeight:"bold",
    color: '#527BB2',
  },
  totalTotalPaperText:{
    fontWeight:"bold",
    color: '#527BB2',
    fontSize: 12
  },
  activePaper: {
    padding: theme.spacing(2),
    background: '#FBDA31',
    borderRadius: 10
  },
  activePaperText:{
    fontWeight:"bold",
    color: '#B99202',
  },
  activeTotalPaperText:{
    fontWeight:"bold",
    color: '#B99202',
    fontSize: 12
  },
  recoveredPaper: {
    padding: theme.spacing(2),
    background: '#A2F8BB',
    borderRadius: 10
  },
  recoveredPaperText:{
    fontWeight:"bold",
    color: '#1C9739',
  },
  recoveredTotalPaperText:{
    fontWeight:"bold",
    color: '#1C9739',
    fontSize: 12
  },
  deathsPaper: {
    padding: theme.spacing(2),
    background: '#FFCCD4',
    borderRadius: 10
  },
  deathsPaperText:{
    fontWeight:"bold",
    color: '#D74574',
  },
  deathsTotalPaperText:{
    fontWeight:"bold",
    color: '#D74574',
    fontSize: 12
  }
}));