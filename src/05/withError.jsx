import React from 'react';
import { withStyles, css } from '../04/withStyles';

export default function (defaultMessage) {
  return (WrapperedComponent) => {
    const { displayName, name: componentName } = WrapperedComponent;
    const wrapperedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMessage, styles, ...props }) {
      return (
        <React.Fragment>
          <WrapperedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
        </React.Fragment>
      );
    }
    ComponentWithError.defaultProps = {
      errorMessage: defaultMessage,
    };

    ComponentWithError.displayName = `withError(${wrapperedComponentName}`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
