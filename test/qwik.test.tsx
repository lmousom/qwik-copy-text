import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QwikCopy from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <QwikCopy isDisabled={false} htmlContent={`<h1> HI there! </h1>`} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
