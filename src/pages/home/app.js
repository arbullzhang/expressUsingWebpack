import React from 'react';
import ReactDOM from 'react-dom';
import Home from './index.js';

//灰常重要，知会 webpack 允许此模块的热更新
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Home />, document.getElementById('app'));
