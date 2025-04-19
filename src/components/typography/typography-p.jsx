import PropTypes from "prop-types";

export function TypographyP({ children }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

TypographyP.proptypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
