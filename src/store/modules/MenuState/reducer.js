export default function SetMenuState(state = 0, action) {
  switch (action.type) {
    case 'SetMenuState':
      if (state === 0) {
        return 1;
      } else {
        return 0;
      }
    default:
      return state;
  }
}
