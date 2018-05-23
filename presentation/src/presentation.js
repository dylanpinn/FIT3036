// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#3ec9f0',
    secondary: '#fff'
  },
  {
    primary: 'Yanone Kaffeesatz'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']}>
          <Heading size={1} fit caps lineHeight={1}>
            FIT3036 &ndash; Computer Science Project
          </Heading>
          <Text margin="10px 0 0" size={6}>
            Dylan Pinn &mdash; 24160547
          </Text>
        </Slide>
        <Slide>
          <Heading>Overview</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading textColor="primary">Objectives</Heading>
          <List textColor="primary">
            <ListItem>
              Design &amp; Develop Surface Area Calculator for Roads
            </ListItem>
            <ListItem>Use Google Maps or similar tools</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading textColor="#fff">Aims</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading textColor="primary">Requirements</Heading>
          <List textColor="primary">
            <ListItem>Easy to use</ListItem>
            <ListItem>Fast</ListItem>
            <ListItem>
              Reasonably<sup>*</sup> accurate
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Rationale</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading textColor="primary">Research</Heading>
          <List textColor="primary">
            <ListItem>Image Processing</ListItem>
            <ListItem>Raw Data</ListItem>
            <List style={{ paddingLeft: '2em' }}>
              <ListItem>OpenStreetMap</ListItem>
              <ListItem>Google Maps</ListItem>
            </List>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Demo</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Discussion</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Conclusion</Heading>
        </Slide>
      </Deck>
    );
  }
}
