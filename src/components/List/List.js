import React from 'react';
import { Container, Paper, Grid, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction } from '@material-ui/core';

import { useStyles } from './Styles';
import Map from '../Map/Map';
import CountUp from 'react-countup';
import "leaflet/dist/leaflet.css";

export const Lists = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.listWrapper}>
              <Box fontSize={22} fontWeight="fontWeightBold" color="#6A5D5D" p={2} pl={3.5}>Live Cases by Country</Box>
              <List className={classes.root}>
                {(props.listData && props.listData.length) ? props.listData.map((list, ind) => (
                  <ListItem key={ind}>
                    <ListItemAvatar>
                      <Avatar src={list.countryInfo.flag} />
                    </ListItemAvatar>
                    <ListItemText primary={list.country} />
                    <ListItemSecondaryAction>
                      <Box fontSize={19} fontWeight="fontWeightBold" color="#6A5D5D">
                        <CountUp
                          start={0}
                          end={list.cases}
                          duration={2.4}
                          separator=","
                        />
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>
                )): <Box fontSize={22} fontWeight="fontWeightBold" color="#6A5D5D" p={2} pl={3.5}>Loading..</Box>}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Paper>
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