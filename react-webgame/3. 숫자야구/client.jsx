import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

import NumBaseBall from './NumBaseBall';

const Hot = hot(NumBaseBall);

ReactDom.render(<Hot/>, document.querySelector('#root'));