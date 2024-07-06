// What do you do when each item needs to render not one, but several DOM nodes?

// The short <>...</> Fragment syntax won’t let you pass a key, 
// so you need to either group them into a single <div>, 
// or use the slightly longer and more explicit <Fragment> syntax:

// Fragments disappear from the DOM, so this will produce a flat list of <h1>, <p>, <h1>, <p>, and so on.

import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);

// crypto.randomUUID()
// uuid package
// these can be used to generate keys