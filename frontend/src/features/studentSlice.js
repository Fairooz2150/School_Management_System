import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as studentAPI from "../api/studentAPI";

// Fetch all students
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    return await studentAPI.fetchStudents();
  }
);

// Add a student
export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (studentData) => {
    return await studentAPI.addStudent(studentData);
  }
);

// Update a student
export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async ({ id, ...studentData }) => {
    return await studentAPI.updateStudent(id, studentData);
  }
);

// Delete a student
export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId) => {
    await studentAPI.deleteStudent(studentId);
    return studentId;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch students
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudents.rejected, (state) => {
        state.loading = false;
      })
      // Add student
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      // Update student
      .addCase(updateStudent.fulfilled, (state, action) => {
        const updatedStudent = action.payload;
        state.students = state.students.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        );
      })
      // Delete student
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (student) => student.id !== action.payload
        );
      });
  },
});

export default studentSlice.reducer;
