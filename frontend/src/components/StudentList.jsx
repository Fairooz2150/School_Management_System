import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  deleteStudent,
  addStudent,
  updateStudent,
} from "../features/studentSlice";
import { toast } from "react-toastify";
import StudentForm from "./StudentForm";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "./Modal"; 
const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.students);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  // State for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleDeleteClick = (id) => {
    setStudentToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteStudent(studentToDelete))
      .unwrap()
      .then(() => toast.success("Student deleted successfully"))
      .catch(() => toast.error("Failed to delete student"));
    setIsDeleteModalOpen(false);
    setStudentToDelete(null);
  };

  const handleAddStudent = () => {
    setCurrentStudent(null); // Clear current student for new record
    setIsFormOpen(true);
  };

  const handleEditStudent = (student) => {
    setCurrentStudent(student); // Set current student for editing
    setIsFormOpen(true);
  };

  const handleSubmit = (formData) => {
    if (currentStudent) {
      dispatch(updateStudent({ id: currentStudent._id, ...formData }))
        .unwrap()
        .then(() => {
          toast.success("Student updated successfully");
          setIsFormOpen(false);
        })
        .catch(() => toast.error("Failed to update student"));
    } else {
      dispatch(addStudent(formData))
        .unwrap()
        .then(() => {
          toast.success("Student added successfully");
          setIsFormOpen(false);
        })
        .catch(() => toast.error("Failed to add student"));
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCurrentStudent(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Students</h1>
        <button
          onClick={handleAddStudent}
          className="bg-green-600 font-bold text-white p-2 flex rounded-2xl"
        >
          <FaPlus className="mr-1 mt-1 " />
          New Student
        </button>
      </div>

      <table className="w-full mt-6 bg-white border-collapse border">
        <thead>
          <tr className="text-left">
            <th className="p-3 border">Student ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3" className="p-3 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student._id}>
                <td className="p-3 border">{student._id}</td>
                <td className="p-3 border">{student.name}</td>
                <td className="p-3 border">{student.class}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => handleEditStudent(student)}
                    className="p-1 mr-2 text-white bg-blue-500 rounded  hover:bg-white hover:text-blue-500"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(student._id)}
                    className=" p-1 text-white bg-red-500 rounded hover:bg-white hover:text-red-500 "
                  >
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">
              {currentStudent ? "Edit Student" : "Add New Student"}
            </h2>
            <StudentForm
              student={currentStudent}
              onSubmit={handleSubmit}
              onCancel={handleCloseForm}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <Modal
          message="Are you sure you want to delete this student?"
          onConfirm={confirmDelete}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default StudentList;
