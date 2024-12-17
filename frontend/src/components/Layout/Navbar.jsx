import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
   dispatch(logout());
  };

  return (
    <nav className="flex justify-between px-6 py-4 bg-blue-500 text-white">
  <Link to={'/'}>     <h1 className="text-xl font-bold">School Management System</h1> </Link>   
      <div className="flex items-center space-x-4">
       {user? <span>{user.name} Dashboard</span>: ''} 
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-600 rounded-xl hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
