import React, { useState } from "react";

const LibraryForm = ({ onSubmit, onCancel, students, isOpen }) => {
  const [bookName, setBookName] = useState("");
  const [borrowStudent, setBorrowStudent] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isReturned, setIsReturned] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      bookName,
      borrowStudent,
      issueDate,
      returnDate,
      isReturned,
    };
    onSubmit(newRecord);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New Record</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Book Name:</label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">Borrow Student:</label>
            <select
              value={borrowStudent}
              onChange={(e) => setBorrowStudent(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select a student</option>
              {students.map((student) => (
                <option key={student._id} value={student._id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block">Issue Date:</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">Return Date:</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isReturned}
                onChange={() => setIsReturned(!isReturned)}
                className="form-checkbox"
              />
              <span className="ml-2">Is returned</span>
            </label>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="py-2 px-4 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md"
            >
              Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LibraryForm;
