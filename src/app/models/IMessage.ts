export interface IMessage{
    id: number;
    name: string;
    email: string;
    phoneNumber: number;
    post: {
      title: string,
      subject: number,
      message: string
    }
  }