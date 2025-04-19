import PropTypes from "prop-types";

export function TypographyInlineCode({ children }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold">
      {children}
    </code>
  );
}

TypographyInlineCode.prototypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
