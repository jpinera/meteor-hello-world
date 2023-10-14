import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <h2>Adding a subtitle to the app to check if it refreshes...</h2>
    <p>Hello World!</p>
    <Hello/>
    <Info/>
  </div>
);
