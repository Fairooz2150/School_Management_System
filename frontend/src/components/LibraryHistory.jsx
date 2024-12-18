import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLibraryHistory,
  deleteRecord,
  addRecord,
  updateRecord,
} from "../features/librarySlice";
import LibraryForm from "./LibraryForm";
import Modal from "./Modal";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { fetchStudents } from "../features/studentSlice";

const LibraryHistory = () => {
  const dispatch = useDispatch();
  const { libraryHistory, loading } = useSelector((state) => state.library);
  const { students } = useSelector((state) => state.students);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchLibraryHistory());
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleAddRecord = (record) => {

    console.log('recordlist:',record);
    
    if (selectedRecord) {
      dispatch(updateRecord({ id: selectedRecord.id, record }));
    } else {
      dispatch(addRecord(record));
    }
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const handleEditRecord = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleDeleteRecord = (id) => {
    setSelectedRecord(id);
    setIsConfirmationModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteRecord(selectedRecord));
    setIsConfirmationModalOpen(false);
    setSelectedRecord(null);
  };

  const cancelDelete = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Library History</h1>
        <button
          onClick={() => {
            setSelectedRecord(null);
            setIsModalOpen(true);
          }}
          className="bg-green-600 font-bold text-white p-2 flex rounded-md"
        >
          <FaPlus className="mr-1 mt-1" />
          New Record
        </button>
      </div>

      {loading && (
        <div className="text-center text-lg text-blue-500">Loading...</div>
      )}

      {!loading && libraryHistory.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full mt-6 bg-white border-collapse border">
            <thead>
              <tr className="text-left bg-gray-800 text-white">
                <th className="p-3 border">Book Name</th>
                <th className="p-3 border">Borrow Student</th>
                <th className="p-3 border">Issue Date</th>
                <th className="p-3 border">Return Date</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {libraryHistory.map((record) => (
                <tr key={record.id} className="hover:bg-gray-100">
                  <td className="p-3 border">{record.bookName}</td>
                  <td className="p-3 border">{record.borrowStudent}</td>
                  <td className="p-3 border">{record.issueDate}</td>
                  <td className="p-3 border">{record.returnDate}</td>
                  <td className="p-3 border">
                    {record.isReturned ? "Returned" : "Not Returned"}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleEditRecord(record)}
                      className="p-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteRecord(record.id)}
                      className="p-1 text-white bg-red-500 rounded hover:bg-red-700"
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && libraryHistory.length === 0 && (
        <div className="text-center text-lg text-gray-600">
          No records available.
        </div>
      )}

      <LibraryForm
        isOpen={isModalOpen}
        onSubmit={handleAddRecord}
        onCancel={() => setIsModalOpen(false)}
        students={students}
        initialData={selectedRecord}
      />

      {isConfirmationModalOpen && (
        <Modal
          message="Are you sure you want to delete this record?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default LibraryHistory;
