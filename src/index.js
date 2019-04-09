import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './Containers/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from './Store/store';

ReactDOM.render(
  <Provider stores={stores}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
  ,
  document.querySelector("#root")
);

serviceWorker.unregister();
