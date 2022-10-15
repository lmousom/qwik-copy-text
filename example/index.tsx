import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QwikCopy } from '../.';

const App = () => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    padding: '10px',
    background: '#5784f5',
    color: '#fff',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  return (
    <div>
      <QwikCopy styles={style} isDisabled={false} htmlContent={`<h1> Hello from QwikCopy! </h1>`} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
