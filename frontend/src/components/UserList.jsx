import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser, editUser } from "../features/userSlice";
import UserForm from "./UserForm";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = (user) => {
    dispatch(addUser(user));
    closeForm();
  };

  const handleUpdateUser = (user) => {
    dispatch(editUser(user));
    closeForm();
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const closeForm = () => {
    setEditingUser(null);
    setShowModal(false);
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
      {loading && <div className="text-center text-lg text-blue-500">Loading...</div>}
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
                      onClick={() => handleEditUser(user)}
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
        <div className="text-center text-lg text-gray-600">No users available.</div>
      )}
      {showModal && (
        <UserForm
          user={editingUser}
          onSubmit={editingUser ? handleUpdateUser : handleAddUser}
          onClose={closeForm}
        />
      )}
    </div>
  );
};

export default UserList;
