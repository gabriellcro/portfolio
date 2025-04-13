import PropTypes from "prop-types";

export default function NavbarDesktop({ tabs }) {
  return (
    <nav className="flex gap-2">
      {tabs.map((tab, idx) => (
        <a
          key={idx}
          href={tab.link}
          className="py-1.5 px-3 capitalize text-nowrap rounded-md transition hover:bg-muted/50"
        >
          {tab.title}
        </a>
      ))}
    </nav>
  );
}

NavbarDesktop.proptypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
