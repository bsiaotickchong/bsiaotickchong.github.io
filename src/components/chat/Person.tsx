import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});

export function Person(): ReactElement {
  const classes = useStyles();

  return (
    <div className={ classes.container }>
      Person
    </div>
  );
}
