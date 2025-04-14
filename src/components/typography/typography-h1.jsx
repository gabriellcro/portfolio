import PropTypes from "prop-types";

export function TypographyH1({ textContent }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono">
      {textContent}
    </h1>
  );
}

TypographyH1.proptypes = {
  textContent: PropTypes.string.isRequired,
};
