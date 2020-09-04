import React from 'react';
import { Container, Paper, Grid, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction } from '@material-ui/core';

import { useStyles } from './Styles';
import Map from '../Map/Map';
import "leaflet/dist/leaflet.css";
// const { width, height } = Dimensions.get("window");
export const Lists = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" style={{}}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper style={{ background: '#F5F6FA' }}>
              <Box fontSize={22} fontWeight="fontWeightBold" color="#6A5D5D" p={2} pl={3.5}>Live Cases by Country</Box>
              <List className={classes.root}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src="https://disease.sh/assets/img/flags/br.png" />
                  </ListItemAvatar>
                  <ListItemText primary="Photos" />
                  <ListItemSecondaryAction>
                    <Box fontSize={19} fontWeight="fontWeightBold" color="#6A5D5D">
                      5000000
                  </Box>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper style={{width:900}}>
              <Map
                countries={props.mapCountries}
                casesType={props.casesType}
                center={props.mapCenter}
                zoom={props.mapZoom}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}