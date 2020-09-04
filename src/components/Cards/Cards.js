import React from 'react';
import { Container, Paper, Grid, Box } from '@material-ui/core';

import { useStyles } from './Styles';

export const Cards = (props) => {
  const classes = useStyles();
  return (
    <div >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.totalPaper}>
              <Box className={classes.totalPaperText} fontSize={18}>
                Total Cases
              </Box>
              <Box className={classes.totalTotalPaperText} mt={4}>
                Total
              </Box>
              <Box className={classes.totalPaperText} fontSize={30}>
                {props.total}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.activePaper}>
              <Box className={classes.activePaperText} fontSize={18}>
                Active
              </Box>
              <Box className={classes.activeTotalPaperText} mt={4}>
                Total
              </Box>
              <Box className={classes.activePaperText} fontSize={30}>
                {props.active}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.recoveredPaper}>
              <Box className={classes.recoveredPaperText} fontSize={18}>
                Recovered
              </Box>
              <Box className={classes.recoveredTotalPaperText} mt={4}>
                Total
              </Box>
              <Box className={classes.recoveredPaperText} fontSize={30}>
                {props.recovered}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.deathsPaper}>
              <Box className={classes.deathsPaperText} fontSize={18}>
                Deaths
              </Box>
              <Box className={classes.deathsTotalPaperText} mt={4}>
                Total
              </Box>
              <Box className={classes.deathsPaperText} fontSize={30}>
                {props.deaths}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}