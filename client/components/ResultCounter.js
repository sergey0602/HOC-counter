import React from 'react';
import counterLogics from '../decorators/counterLogics';

const ResultCounter = props => (
  <span>Result: {props.count}</span>
);

export default counterLogics(ResultCounter);
