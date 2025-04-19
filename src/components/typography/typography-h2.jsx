import PropTypes from "prop-types";

export function TypographyH2({ textContent }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {textContent}
    </h2>
  );
}

TypographyH2.proptypes = {
  textContent: PropTypes.string.isRequired,
};
