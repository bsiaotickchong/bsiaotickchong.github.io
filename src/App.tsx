import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
});

function App(): ReactElement {
  const classes = useStyles();

  return (
    <div className={ classes.mainContainer }>
      Testing
    </div>
  );
}

function renderDOM() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}

export async function initApp(): Promise<void> {
  try {
    renderDOM();
  } catch (error) {
    console.error('Error initializing App', error);
  }
}
