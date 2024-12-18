import React, { useState } from "react";

const LibraryForm = ({ onSubmit, onCancel, students, isOpen, initialData }) => {
  const [bookName, setBookName] = useState(initialData?.bookName || "");
  const [borrowStudent, setBorrowStudent] = useState(
    initialData?.borrowStudent || ""
  );
  const [issueDate, setIssueDate] = useState(initialData?.issueDate || "");
  const [returnDate, setReturnDate] = useState(initialData?.returnDate || "");
  const [isReturned, setIsReturned] = useState(initialData?.isReturned || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const record = {
      bookName,
      borrowStudent,
      issueDate,
      returnDate,
      isReturned,
    };

    console.log('record:',record);
    
    onSubmit(record);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Record" : "Add New Record"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Book Name
            </label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Borrow Student
            </label>
            <select
              value={borrowStudent}
              onChange={(e) => setBorrowStudent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
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
            <label className="block text-sm font-medium text-gray-700">
              Issue Date
            </label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
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
              <span className="ml-2">Is Returned</span>
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
              {initialData ? "Update Record" : "Add Record"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LibraryForm;
