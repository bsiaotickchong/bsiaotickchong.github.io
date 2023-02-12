import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { Message } from '../../types/Messages';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export function ChatMessage({ message }: { message: Message }): ReactElement {
  const classes = useStyles();

  return (
    <div className={ classes.container }>
      { message.name }: { message.message }
    </div>
  );
}
