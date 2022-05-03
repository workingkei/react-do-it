import { action } from '@storybook/addon-actions';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
