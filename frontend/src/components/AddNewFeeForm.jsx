import React from 'react';

const AddNewFeeForm = ({ showModal, setShowModal, newFee, handleChange, handleAddRecord, students }) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-auto">
          <h2 className="text-2xl font-semibold mb-4">Add New Fee Record</h2>

          <form onSubmit={handleAddRecord} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Amount:</label>
              <input
                type="number"
                name="amount"
                value={newFee.amount}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Amount Paid:</label>
              <input
                type="number"
                name="amountPaid"
                value={newFee.amountPaid}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Paid Student:</label>
              <select
                name="studentId"
                value={newFee.studentId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select a student</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Payment Date:</label>
              <input
                type="date"
                name="paymentDate"
                value={newFee.paymentDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Payment Method:</label>
              <select
                name="paymentMethod"
                value={newFee.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Fees Status:</label>
              <select
                name="status"
                value={newFee.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
            </div>

            <div className="mb-4 md:col-span-2">
              <label className="block text-gray-700">Remarks:</label>
              <textarea
                name="remarks"
                value={newFee.remarks}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex justify-between md:col-span-2">
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
                Add Record
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddNewFeeForm;
