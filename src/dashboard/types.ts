export type ID = string;

export enum Status {
  TeacherUpdated = "teacher-updated",
  StudentUpdated = "student-updated",
  Checked = "checked",
  CheckedAndViewed = "checked-and-viewed",
  none = "",
}

export type UserRole = "student" | "teacher";

export interface IUser {
  id: ID;
  name: string;
}

export interface IStudent extends IUser {
  class: ID;
  subjects: ID[];
  homeworks: ID[];
  status: Status;
}

export interface ITeacher extends IUser {
  classes: ID[];
  students: ID[];
  homeworks: ID[];
}

export interface IClass {
  id: ID;
  name: string;
  students: ID[];
}

export interface ISubject {
  id: ID;
  name: string;
}

export interface IHomeWork {
  id: ID;
  name: string;
  content: string;
  studentContent: string;
  comments: IComment[];
  student: ID;
  subject: ID;
  status: Status;
}

export interface IComment {
  id: string;
  text: string;
  name: string;
  role: UserRole;
}

export interface IHomeWorkComment {
  id: ID;
  user: ID;
  content: string;
}
