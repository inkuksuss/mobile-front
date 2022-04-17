export enum Authority {
  STUDENT = "STUDENT",
  PROFESSOR = "PROFESSOR",
}

export interface AddMemberForm {
  memberName: string;
  memberEmail: string;
  memberStudentId: string;
  memberAlias: string;
  memberDepartment: string;
  memberPhone: string;
  memberBirthday: string;
  memberPassword: string;
  memberGrade: number;
  memberAuthority: Authority;
}

export interface LoginForm {
  memberEmail: string;
  memberPassword: string;
}

export interface ResultResponse {
  httpStatus: string;
  resultCode: number;
  resultMessage: string;
  data: any;
}

export interface SelectOptionInterface {
  value: string | number;
  label: string;
}
