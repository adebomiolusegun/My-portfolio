import { HeroHeadingProps } from "./type";

function HeroHeading({ greeting, line2, line3, highlight }: HeroHeadingProps) {
  return (
    <h1 className="hero max-w-2xl pb-2">
      <span className="block">{greeting}</span>
      <span className="block">{line2}</span>
      <span className="block">{line3}</span>
      <span className="block text-primary">{highlight}</span>
    </h1>
  );
}

export default HeroHeading;
