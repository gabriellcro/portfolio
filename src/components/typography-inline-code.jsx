import PropTypes from "prop-types";

export function TypographyInlineCode({ content }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {content}
    </code>
  );
}

TypographyInlineCode.prototypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
