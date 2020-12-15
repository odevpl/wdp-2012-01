/* selectors */
export const gettextBargain = ({ Promotion }) => Promotion.textbargain;
export const getFirstChair = ({ Promotion }) => Promotion.firstChair;
export const getSecondChair = ({ Promotion }) => Promotion.secondChair;
export const getBed = ({ Promotion }) => Promotion.bed;
export const gettext1 = ({ Promotion }) => Promotion.text1;
export const gettext2 = ({ Promotion }) => Promotion.text2;
export const gettext3 = ({ Promotion }) => Promotion.text3;
export const gettextPrice = ({ Promotion }) => Promotion.textPrice;
export const gettextInfo = ({ Promotion }) => Promotion.textInfo;
export const getSofa = ({ Promotion }) => Promotion.sofa;

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
