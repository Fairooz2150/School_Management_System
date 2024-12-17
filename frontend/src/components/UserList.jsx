import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser, editUser } from "../features/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "admin", 
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setShowModal(false); 
    setNewUser({
      name: "",
      email: "",
      role: "admin",
    });
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId)); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditUser = (userId) => {
    console.log("Edit user:", userId);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">User List</h1>

      <button
        className="mb-6 p-2 bg-green-500 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Add New User
      </button>

      {loading && (
        <div className="text-center text-lg text-blue-500">Loading...</div>
      )}

      {!loading && users.length > 0 && (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-4">User ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center border-t">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4 flex justify-center gap-4">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEditUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && users.length === 0 && (
        <div className="text-center text-lg text-gray-600">
          No users available.
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Add New User</h2>

            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Role:</label>
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="admin">Admin</option>
                  <option value="librarian">Librarian</option>
                  <option value="officeStaff">Office Staff</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
