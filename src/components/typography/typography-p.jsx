import PropTypes from "prop-types";

export function TypographyP({ textContent }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{textContent}</p>;
}

TypographyP.proptypes = {
  textContent: PropTypes.string.isRequired,
};
