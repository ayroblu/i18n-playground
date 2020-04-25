type EnPluralTypes = "one" | "other";
type EnPluralMap = { [k in EnPluralTypes]: string };

export const getMessageFn = <
  A extends { [key: string]: any },
  B extends { [key: string]: A | undefined }
>(
  defaultMessage: A,
  messages: B
) => (key: keyof A) => {
  const locale = "en";
  const localeMessages = messages[locale];
  return localeMessages ? localeMessages[key] : defaultMessage[key];
};

export function getEnPlural(plurals: EnPluralMap, num: number): string {
  if (Object.keys(plurals).length === 0) {
    throw new Error("No plurals provided");
  }
  const res = new Intl.PluralRules().select(num) as EnPluralTypes;
  const plural = plurals[res];
  if (!plural)
    throw new Error(
      `Did not find a result for ${JSON.stringify(plurals)}, ${res}, ${num}`
    );
  return plurals[res];
}
