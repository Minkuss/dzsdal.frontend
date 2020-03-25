import { IClass, IHomeWork, IStudent, ISubject, ITeacher, Status } from "../types";
import { ClassesService } from "./ClassesService";
import { HomeWorksService } from "./HomeWorksService";
import { StudentsService } from "./StudentsService";
import { SubjectsService } from "./SubjectsService";
import { TeachersService } from "./TeachersService";

export function populateMockData() {
  const subjects: ISubject[] = [
    {
      id: "subject_1",
      name: "Русский язык",
    },
    {
      id: "subject_2",
      name: "История",
    },
  ];

  const homeworks: IHomeWork[] = [
    {
      id: "homework_1",
      name: "Упр. 103",
      subject: "subject_1",
      student: "student_1",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_2",
      name: "Упр. 305",
      subject: "subject_2",
      student: "student_1",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_3",
      name: "Упр. 103",
      subject: "subject_1",
      student: "student_2",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_4",
      name: "Упр. 305",
      subject: "subject_2",
      student: "student_2",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_5",
      name: "Упр. 103",
      subject: "subject_1",
      student: "student_3",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_6",
      name: "Упр. 305",
      subject: "subject_2",
      student: "student_3",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_7",
      name: "Упр. 103",
      subject: "subject_1",
      student: "student_4",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
    {
      id: "homework_8",
      name: "Упр. 305",
      subject: "subject_2",
      student: "student_4",
      content: "",
      studentContent: "",
      comments: [],
      status: Status.none,
    },
  ];

  const teachers: ITeacher[] = [
    {
      id: "teacher_1",
      name: "Антонина Петровна",
      classes: ["class_1", "class_2"],
      students: ["student_1", "student_2", "student_3", "student_4"],
      homeworks: ["homework_1", "homework_3", "homework_5", "homework_7"],
    },
    {
      id: "teacher_2",
      name: "Людмила Васильевна",
      classes: ["class_1", "class_2"],
      students: ["student_1", "student_2", "student_3", "student_4"],
      homeworks: ["homework_2", "homework_4", "homework_6", "homework_8"],
    },
  ];

  const students: IStudent[] = [
    {
      id: "student_1",
      name: "Никита Шиян",
      class: "class_1",
      homeworks: ["homework_1", "homework_2"],
      subjects: ["subject_1", "subject_2"],
      status: Status.none,
    },
    {
      id: "student_2",
      name: "Станислав Онисич",
      class: "class_1",
      homeworks: ["homework_3", "homework_4"],
      subjects: ["subject_1", "subject_2"],
      status: Status.none,
    },
    {
      id: "student_3",
      name: "Шикита Ниян",
      class: "class_2",
      homeworks: ["homework_5", "homework_6"],
      subjects: ["subject_1", "subject_2"],
      status: Status.none,
    },
    {
      id: "student_4",
      name: "Отанислав Снисич",
      class: "class_2",
      homeworks: ["homework_7", "homework_8"],
      subjects: ["subject_1", "subject_2"],
      status: Status.none,
    },
  ];

  const classes: IClass[] = [
    { id: "class_1", name: "9Б", students: ["student_1", "student_2"] },
    { id: "class_2", name: "9А", students: ["student_3", "student_4"] },
  ];

  SubjectsService.saveMockData(subjects);
  HomeWorksService.saveMockData(homeworks);
  TeachersService.saveMockData(teachers);
  StudentsService.saveMockData(students);
  ClassesService.saveMockData(classes);
}
