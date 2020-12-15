/* selectors */
export const getImage = ({ brand }) => brand;

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
