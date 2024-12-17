import { Link } from "react-router-dom";

const Sidebar = ({ links }) => {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white">
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="block px-4 py-2 hover:bg-gray-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
