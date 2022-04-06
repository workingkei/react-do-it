import React from 'react';

export default function withHoC(WrapperedComponent) {
  const { displayName, name } = WrapperedComponent;
  const wrapperedComponentName = displayName || name;
  return class WithHoC extends React.Component {
    static displayName = `withHoC(${WrapperedComponent.name})`;
    render() {
      return <WrapperedComponent {...this.props} />;
    }
  };
}
