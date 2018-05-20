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
    primary: '#fd4142',
    secondary: '#3ec9f0',
    tertiary: '#f0f2eb',
    quartenary: '#797979'
  },
  {
    primary: 'Yanone Kaffeesatz',
    secondary: 'Lato'
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
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            FIT3036 &ndash; Computer Science Project
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={6}>
            Dylan Pinn &mdash; 24160547
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>Overview</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading textColor="secondary">Objectives</Heading>
          <List>
            <ListItem>
              Design &amp; Develop Surface Area Calculator for Roads
            </ListItem>
            <ListItem>Use Google Maps or similar tools</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Aims</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>Rationale</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Demo</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>Discussion</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading>Conclusion</Heading>
        </Slide>
      </Deck>
    );
  }
}
