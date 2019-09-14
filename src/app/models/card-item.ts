import IUser from './user';

export default interface ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: IUser;
}
