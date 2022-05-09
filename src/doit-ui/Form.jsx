import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.careateContext({});

class FormProvider extends PureComponent {
  static Consumer = Consumer;

  static getDerivedStateFromProps({ initValues }, prevState) {
    const values = initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      error: {},
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { values, errors } = this.state;
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      this.props.onSubmit(values);
    }
  }

  onChange(name, updatedValue) {
    this.validate(this.state.values);
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: updatedValue,
      },
    }));
  }

  reset() {
    this.setState({ values: {} });
  }

  validate(values) {
    const { validat } = this.props;
    if (!this.validate()) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({ errors });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider value={{ errors, values, onChange: this.onChange, reset: this.reset }}>
        <form onChange={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};

export default FormProvider;
