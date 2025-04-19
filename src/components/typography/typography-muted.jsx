import PropTypes from "prop-types";

export function TypographyMuted({ children }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

TypographyMuted.proptypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
