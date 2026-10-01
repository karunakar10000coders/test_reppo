import axios from "axios";
import { classesUrl, staffUrl, studentsUrl, subjectsUrl } from "./urls";

export const getStudentsApiData = async () => {
  const response = await axios.get(studentsUrl);
  return response.data;
};

export const postStudentsApiData = async (payload) => {
  const response = await axios.post(studentsUrl, payload);
  console.log(response);
  return response.data;
};

export const getStaffApiData = async () => {
  const response = await axios.get(staffUrl);
  return response.data;
};
export const getSubjectsApiData = async () => {
  const response = await axios.get(subjectsUrl);
  return response.data;
};
export const getClassesApiData = async () => {
  const response = await axios.get(classesUrl);
  return response.data;
};
