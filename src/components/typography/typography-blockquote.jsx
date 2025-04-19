import PropTypes from "prop-types";

export function TypographyBlockquote({ children }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

TypographyBlockquote.proptypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
