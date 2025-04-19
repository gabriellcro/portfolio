import PropTypes from "prop-types";

export function TypographyMuted({ textContent }) {
  return <p className="text-sm text-muted-foreground">{textContent}</p>;
}

TypographyMuted.proptypes = {
  textContent: PropTypes.string.isRequired,
};
