import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import { Provider } from 'react-redux';
import { useAppDispatch } from './app/hooks';
import store from './app/store';
import { Crowd } from './components/crowd/Crowd';
import { ChatService } from './services/ChatService';

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
  const dispatch = useAppDispatch();

  new ChatService(dispatch);

  return (
    <div className={ classes.mainContainer }>
      Testing this out
      <Crowd />
    </div>
  );
}

function renderDOM() {
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
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
