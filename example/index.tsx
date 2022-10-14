import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QwikCopy } from '../.';

const App = () => {
  return (
    <div>
      <QwikCopy isDisabled={false} htmlContent={`<h1> HI there! </h1>`} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
