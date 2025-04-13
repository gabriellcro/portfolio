import PropTypes from "prop-types";

export default function Container({ childers }) {
  return (
    <main className="flex flex-1 justify-center w-full h-full px-5">
      <div className="flex justify-center pt-30 max-w-[1920px] w-full border-x-2 border-dotted sm:pt-50">
        {childers}
      </div>
    </main>
  );
}

Container.proptypes = {
  childers: PropTypes.node.isRequired,
};
