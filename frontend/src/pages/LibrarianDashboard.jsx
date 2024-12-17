import { Link } from "react-router-dom";

const LibrarianDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700">Library Management</h1>
      <div className="mt-6">
        <Link
          to="/library"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          View Library History
        </Link>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
