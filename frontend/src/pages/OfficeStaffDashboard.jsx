import { Link } from "react-router-dom";

const OfficeStaffDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700">Office Staff Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
        <Link
          to="/students"
          className="p-4 bg-white border rounded shadow hover:bg-blue-100"
        >
          Manage Students
        </Link>
        <Link
          to="/fees"
          className="p-4 bg-white border rounded shadow hover:bg-blue-100"
        >
          Manage Fees History
        </Link>
      </div>
    </div>
  );
};

export default OfficeStaffDashboard;
