export const getScreenWidth = ({ screenWidth }) => screenWidth;

/* action name creator */
const reducerName = 'screenWidth';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_SCREEN_WIDTH = createActionName('CHANGE_SCREEN_WIDTH ');

/* action creators */
export const changeScreenWidth = payload => ({ payload, type: CHANGE_SCREEN_WIDTH });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_SCREEN_WIDTH: {
      return {
        screenWidth: [action.payload],
      };
    }
    default:
      return statePart;
  }
}
