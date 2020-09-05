import React from 'react';
import { Container, MenuItem, FormControl, Select } from '@material-ui/core';

export const Header = (props) => {
  return (
    <Container>
      <div className="headerWrapper">
        <p className="header">Covid-19 Tracker</p>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value={props.country}
            onChange={props.onChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {props.countries && props.countries.map((country, ind) => (
              <MenuItem key={ind} value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Container>
  )
}