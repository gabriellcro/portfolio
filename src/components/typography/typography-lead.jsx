import PropTypes from "prop-types";

export function TypographyLead({ children }) {
  return (
    <p className="text-xl text-muted-foreground">{children}</p>
  );
}
TypographyLead.proptypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
