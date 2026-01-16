import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../store/redux/dataSlice";
import { getData } from "../service/api.js";
import { addCourse, editCourse, deleteCourse } from "../service/api.js";
import { addData, editData, deleteData } from "../store/redux/dataSlice";
import { useState } from "react";

const ListView = () => {
  const dispatch = useDispatch();

  // State Modal dan Input
  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [editId, setEditId] = useState(null);

  // ambil data courses dari redux
  const courses = useSelector((state) => state.data.data);

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await getData();
      dispatch(setData(result));
    };
    fetchCourses();
  }, [dispatch]);

  return (
    <div className="p-6 bg-cyan-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">List Courses</h1>

      <button
        onClick={() => {
          setShowModal(true);
          setEditId(null);
          setCourseName("");
        }}
        className="mb-6 px-4 py-2 bg-green-600 cursor-pointer hover:bg-green-700 text-white rounded"
      >
        Tambah Course
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <h2 className="text-lg font-bold mb-4">
              {editId ? "Edit Course" : "Add Course"}
            </h2>

            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Nama Tutor"
              className="border p-2 rounded w-full mb-3"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded hover:shadow-lg 
                hover:scale-[1.02] 
                transition cursor-pointer"
              >
                Batal
              </button>

              <button
                onClick={async () => {
                  if (editId) {
                    // ✅ EDIT
                    const updated = await editCourse(editId, {
                      name: courseName,
                    });
                    dispatch(editData(updated));
                  } else {
                    // ✅ ADD
                    const newCourse = await addCourse({
                      name: courseName,
                      image: "https://loremflickr.com/640/480/course",
                    });
                    dispatch(addData(newCourse));
                  }

                  setShowModal(false);
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded
                cursor-pointer hover:shadow-lg 
                hover:scale-[1.02] 
                transition"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="
            bg-white
            rounded-xl
            shadow-md
            overflow-hidden
            hover:shadow-xl
            transition
            border
            hover:scale-[1.02]
            cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={course.image}
              alt={course.name}
              className="h-48 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{course.name}</h2>

              <p className="text-sm text-gray-500 mb-4">
                Created at: {new Date(course.createdAt).toLocaleDateString()}
              </p>

              <div className="flex justify-between">
                <button
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                  onClick={() => {
                    setEditId(course.id);
                    setCourseName(course.name);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                  onClick={async () => {
                    await deleteCourse(course.id);
                    dispatch(deleteData(course.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
