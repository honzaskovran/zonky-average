import React from 'react';
import { connect } from 'react-redux';
import { findRating } from '../actions/rating';

const ratings = [
  {
    key: 'AAAAA',
    name: 'A**'
  },
  {
    key: 'AAAA',
    name: 'A*'
  },
  {
    key: 'AAA',
    name: 'A++'
  },
  {
    key: 'AA',
    name: 'A+'
  },
  {
    key: 'A',
    name: 'A'
  },
  {
    key: 'B',
    name: 'B'
  },
  {
    key: 'C',
    name: 'C'
  },
  {
    key: 'D',
    name: 'D'
  },
];

const Selection = props => (
  ratings.map(rating => (
    <button key={rating.key} onClick={() => props.findRating(rating.key, rating.name)}>{rating.name}</button>
  ))
);

export default connect(() => ({}), { findRating })(Selection);