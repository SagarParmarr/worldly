export const flagEmojiToString = (flagEmoji: string): string => {
  const chars = Array.from(flagEmoji);
  if (chars.length !== 2) {
    return '';
  }

  const baseIndicatorOffset = 127397;
  const codePoints = chars.map((char) => char.codePointAt(0)!);
  const countryCodeChars = codePoints.map((point) =>
    String.fromCharCode(point - baseIndicatorOffset)
  );
  return countryCodeChars.join('').toLowerCase();
};
