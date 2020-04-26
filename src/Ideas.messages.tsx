import { getMessageFn, getEnPlural, getEnOrdinalPlural } from "./i18n/helper";

const enMessages = {
  clickedParagraph: (counter: number) => {
    return `You have clicked this paragraph ${counter} ${getEnPlural(
      {
        one: "time",
        other: "times",
      },
      counter
    )}`;
  },
  ordinalClickedParagraph: (counter: number) => {
    return `You have clicked this paragraph a ${counter}${getEnOrdinalPlural(
      {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th",
      },
      counter
    )} time`;
  },
  diffOrdinalClickedParagraph: (counter: number) => {
    return getEnOrdinalPlural(
      {
        one:
          counter === 1
            ? "Woot, first click!"
            : `That was your ${counter}st click`,
        two: `That was your ${counter}nd click`,
        few: `That was your ${counter}rd click`,
        other:
          counter === 0
            ? "You have never clicked this paragraph!"
            : `That was your ${counter}th click`,
      },
      counter
    );
  },
};
const messages: { [key: string]: typeof enMessages | undefined } = {
  en: enMessages,
};

export const getMessage = getMessageFn(enMessages, messages);
