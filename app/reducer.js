const initialState = {
  active: false,
  reset: true,
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {...state, active: true, reset: false};
    case 'STOP':
      return {...state, active: false};
    case 'RESET':
      return {...state, active: false, reset: true, value: 0};
    case 'INCREMENT':
      return {...state, value: state.value + 1};
    default:
      return state;
  }
};