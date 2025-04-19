import PropTypes from "prop-types";

export function TypographyInlineCode({ children, className }) {
  return (
    <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold ${className}`}>
      {children}
    </code>
  );
}

TypographyInlineCode.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

TypographyInlineCode.defaultProps = {
  className: ""
};