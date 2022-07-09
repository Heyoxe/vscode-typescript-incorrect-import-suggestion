export const WITH_LOCALE = true;
export function lowercase(input, withLocale = WITH_LOCALE) {
  return withLocale ? input.toLocaleLowercase() : input.toLowerCase();
}
