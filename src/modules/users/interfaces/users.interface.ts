export interface IPermission {
  canCreate: number;
  canRead: number;
  canUpdate: number;
  canDelete: number;
  canApprove: number;
  url: string;
}

export interface IUser {
  fullName: string;
  email: string;
  dateOfBirth: string;
  class: string;
  facebookLink: string;
  username: string;
  password: string;
  role: string;
  permission: IPermission;
  isDelete: number;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}
