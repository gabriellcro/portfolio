import PropTypes from "prop-types";

export function TypographyLead({ textContent }) {
  return (
    <p className="text-xl text-muted-foreground">{textContent}</p>
  );
}
TypographyLead.proptypes = {
  textContent: PropTypes.string.isRequired,
};
