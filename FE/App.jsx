import React from 'react';
import ReactDom from 'react-dom';

import {hot} from 'react-hot-loader/root';


import Index from './Index';

const Hot = hot(Index);

ReactDom.render(<Hot/>, document.querySelector('#root'));