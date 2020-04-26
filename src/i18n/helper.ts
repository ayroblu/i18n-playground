type EnPluralTypes = "one" | "other";
type EnOrdinalPluralTypes = "one" | "two" | "few" | "other";
type EnPluralMap = { [k in EnPluralTypes]: string };
type EnOrdinalPluralMap = { [k in EnOrdinalPluralTypes]: string };

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
  const res = new Intl.PluralRules("en").select(num) as EnPluralTypes;
  const plural = plurals[res];
  if (!plural)
    throw new Error(
      `Did not find a result for ${JSON.stringify(plurals)}, ${res}, ${num}`
    );
  return plural;
}

export function getEnOrdinalPlural(
  plurals: EnOrdinalPluralMap,
  num: number
): string {
  if (Object.keys(plurals).length === 0) {
    throw new Error("No plurals provided");
  }
  const res = new Intl.PluralRules("en", { type: "ordinal" }).select(
    num
  ) as EnOrdinalPluralTypes;
  const plural = plurals[res];
  if (!plural)
    throw new Error(
      `Did not find a result for ${JSON.stringify(plurals)}, ${res}, ${num}`
    );
  return plural;
}
