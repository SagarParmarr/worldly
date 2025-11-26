export default function Emoji({ flagEmoji }: { flagEmoji: string }) {
  const chars = Array.from(flagEmoji);

  if (chars.length !== 2) {
    return <span>{flagEmoji}</span>;
  }

  const baseIndicatorOffset = 127397;
  const codePoints = chars.map((char) => char.codePointAt(0)!);
  const countryCodeChars = codePoints.map((point) =>
    String.fromCharCode(point - baseIndicatorOffset)
  );

  const countryCode = countryCodeChars.join('').toLowerCase();
  const countryImgUrl = `https://flagcdn.com/16x12/${countryCode}.png`;

  return (
    countryCode && (
      <img
        src={countryImgUrl}
        alt={`Flag of ${countryCode}`}
        width={20}
        height={15}
      />
    )
  );
}
