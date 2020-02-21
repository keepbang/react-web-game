import React from 'react';
import ReactDom from 'react-dom';

import {hot} from 'react-hot-loader/root';


import Test from './Test';

const Hot = hot(Test);

ReactDom.render(<Hot/>, document.querySelector('#root'));