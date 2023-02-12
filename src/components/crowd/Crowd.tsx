import React, { ReactElement, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useAppSelector } from '../../app/hooks';
import { selectMessages } from '../../app/state/messagesSlice';
import { ChatMessage } from '../chat/ChatMessage';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});

export function Crowd(): ReactElement {
  const classes = useStyles();
  const messages = useAppSelector(selectMessages);

  const chatMessages = messages.map(message => {
    return <ChatMessage key={ `${message.name + message.message}` } message={ message } />;
  });

  return (
    <div className={ classes.container }>
      { chatMessages }
    </div>
  );
}
