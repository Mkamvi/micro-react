/**
 * @author iWuzhi
 * @date 2021-01-31 03:12:00
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './views';
import MainStore from '@/models';

import './index.css';

/* --------------------------------- MockJS --------------------------------- */
require('./__mocks__');

ReactDOM.render(<App store={MainStore} />, document.getElementById('root'));
