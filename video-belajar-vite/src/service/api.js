import axios from "axios";

const API_URL = "https://693ec99e12c964ee6b6e530f.mockapi.io/courses";

export const getData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// ✅ ADD COURSE
export const addCourse = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

// ✅ EDIT COURSE
export const editCourse = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

// ✅ DELETE COURSE
export const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default getData;
