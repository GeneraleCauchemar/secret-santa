import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecretSanta from './SecretSanta/SecretSanta';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faGifts, faExclamationTriangle, faBackspace, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCandyCane, faGifts, faExclamationTriangle, faBackspace, faTimes);

ReactDOM.render(
  <React.StrictMode>
    <SecretSanta />
  </React.StrictMode>,
  document.getElementById('root')
);
