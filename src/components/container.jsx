import PropTypes from "prop-types";

export default function Container({ childers }) {
  return (
    <main className="flex flex-1 justify-center w-full h-full p-5 mt-24 sm:mt-36">
      {childers}
    </main>
  );
}

Container.proptypes = {
  childers: PropTypes.node.isRequired,
};
