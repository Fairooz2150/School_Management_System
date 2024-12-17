import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../features/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Redirect after successful login based on user role
  useEffect(() => {
    if (user) {
      toast.success("Login successful!");
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "librarian":
          navigate("/librarian");
          break;
        case "office-staff":
          navigate("/office-staff");
          break;
        default:
          navigate("/");
      }
    }
  }, [user, navigate]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .unwrap()
      .catch((err) => toast.error(err || "Login failed"));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="text-xl font-semibold text-center">Login</h1>
        <div className="mt-4">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
