import { getMessageFn, getEnPlural } from "./i18n/helper";

const enMessages = {
  message: (counter: number) => {
    return `You have clicked this paragraph ${counter} ${getEnPlural(
      {
        one: "time",
        other: "times",
      },
      counter
    )}`;
  },
};
const messages: { [key: string]: typeof enMessages | undefined } = {
  en: enMessages,
};

export const getMessage = getMessageFn(enMessages, messages);
