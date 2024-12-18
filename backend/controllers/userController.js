const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    res.status(200).json(user);  // Send the list of user as a response
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};



const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);  // Return the updated user
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);  // Delete the user by ID
    res.status(200).json({ message: "User deleted successfully" });  // Return a success message
  } catch (error) {
    res.status(400).json({ message: "Error deleting user", error: error.message });
  }
};

module.exports = {
  getUsers,
  updateUser,
  deleteUser,
};
