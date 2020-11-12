export default function Page(state = 0, action) {
  switch (action.type) {
    case 'SetPage':
      if ((state >= 0) & (state < 4)) return action.Page;
      return state;
    default:
      return state;
  }
}
