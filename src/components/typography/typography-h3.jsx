import PropTypes from "prop-types";

export function TypographyH3({ textContent }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-mono">
      {textContent}
    </h3>
  );
}

TypographyH3.proptypes = {
  textContent: PropTypes.string.isRequired,
};
