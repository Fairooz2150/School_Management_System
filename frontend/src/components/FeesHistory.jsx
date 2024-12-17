import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFeesHistory,
  addFeesRecord,
  deleteFeeRecord,
} from "../features/feesSlice";
import { fetchStudents } from "../features/studentSlice";
import AddNewFeeForm from "./AddNewFeeForm";

const FeesHistory = () => {
  const dispatch = useDispatch();
  const { feesHistory, loading } = useSelector((state) => state.fees);
  const { students } = useSelector((state) => state.students);
  const [showModal, setShowModal] = useState(false);
  const [newFee, setNewFee] = useState({
    amount: "",
    amountPaid: "",
    studentId: "",
    paymentDate: "",
    paymentMethod: "",
    status: "Pending",
    remarks: "",
  });

  useEffect(() => {
    dispatch(fetchFeesHistory());
    dispatch(fetchStudents());
  }, [dispatch]);

  // Handle Add Record
  const handleAddRecord = (e) => {
    e.preventDefault();
    // Dispatch the action to add the new fee record
    dispatch(addFeesRecord(newFee));

    // reset the form and close the modal
    setShowModal(false);
    setNewFee({
      amount: "",
      amountPaid: "",
      studentId: "",
      paymentDate: "",
      paymentMethod: "",
      status: "Pending",
      remarks: "",
    });
  };

  // Handle Change in Form Fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Delete Record
  const handleDeleteRecord = (id) => {
    // Dispatch the action to delete the fee record
    dispatch(deleteFeeRecord(id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Fees History</h1>

      {/* Add New Record Button */}
      <button
        className="mb-6 p-2 bg-green-500 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Add New Record
      </button>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center text-lg text-blue-500">Loading...</div>
      )}

      {/* Fees Records Table */}
      {!loading && feesHistory.length > 0 && (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-4">Amount</th>
                <th className="p-4">Amount Paid</th>
                <th className="p-4">Student</th>
                <th className="p-4">Payment Date</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Status</th>
                <th className="p-4">Remarks</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feesHistory.map((record) => (
                <tr key={record.id} className="text-center border-t">
                  <td className="p-4">{record.amount}</td>
                  <td className="p-4">{record.amountPaid}</td>
                  <td className="p-4">{record.studentName}</td>
                  <td className="p-4">{record.paymentDate}</td>
                  <td className="p-4">{record.paymentMethod}</td>
                  <td className="p-4">{record.status}</td>
                  <td className="p-4">{record.remarks}</td>
                  <td className="p-4 flex justify-center gap-4">
                    <button
                      className="text-blue-500"
                      onClick={() => console.log(`Edit ${record.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteRecord(record.id)}
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

      {/* No Records Message */}
      {!loading && feesHistory.length === 0 && (
        <div className="text-center text-lg text-gray-600">
          No records available.
        </div>
      )}

      <AddNewFeeForm
        showModal={showModal}
        setShowModal={setShowModal}
        newFee={newFee}
        handleChange={handleChange}
        handleAddRecord={handleAddRecord}
        students={students}
      />
    </div>
  );
};

export default FeesHistory;
