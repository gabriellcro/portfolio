import PropTypes from "prop-types";

export default function Wrapper({ children }) {
  return (
    <main className="flex flex-col gap-8 flex-1 max-w-6xl w-full p-8 mt-12 sm:mt-28">
      {children}
    </main>
  );
}

Wrapper.proptypes = {
  children: PropTypes.node.isRequired,
};
