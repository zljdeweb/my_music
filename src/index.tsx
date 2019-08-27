import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as styles from './index.scss';
import Test from '@components/Test'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

import *as store from './store'
configure({enforceActions:'observed'})
// import './index.scss';
// const style= require('./index.scss')
ReactDOM.render(
    // <div className={styles.color}>6786876668769</div>, 
    <Provider {...store}>
        <Test />,
    </Provider>,
    document.getElementById('app')
);