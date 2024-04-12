/* global mainpageDTO */

/**
 * @typedef {Object} StudentDTO
 * @property {number} id - The ID of the student.
 * @property {string} rollNo - The roll number of the student.
 * @property {string} name - The name of the student.
 * @property {string} photo - The photo URL or base64 representation.
 */

/**
 * @typedef {object} mainpageDTO
 * @property {StudentDTO[]} liststudents - The list of students.
 * @property {StudentDTO[]} listtoppers - The topperlist of students.
 */
// export default mainpageDTO;

/**
 * @typedef {Object} studentCreationDTO
 * @property {string} name - The name of the student.
 * @property {string} rollno - The roll number of the student.
 * @property {boolean} isActive - Indicates whether the student is active.
 * @property {Date} [dateOfBirth] - The date of birth of the student (optional).
 * @property {string} [photo] - The photo of the student (optional).
 * @property {string} [photoURL] - The URL of the student's photo (optional).
 */
export default studentCreationDTO;
