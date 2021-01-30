/**
 * author iWuzhi
 * date 2020-08-22 10:58:08
 */

import React from 'react';
import AsyncLoader from 'async-loader';

export default () => {
  return <AsyncLoader appName='your-app-name' cdnPath='/cdn/your-app-name/main.js' />;
};