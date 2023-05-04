import { Alert } from "antd";

interface IErrorMessage {
  message?: string;
}

export const ErrorMessage = ({ message }: IErrorMessage) => {
  if (!message) {
    return null;
  }

  return <Alert message={message} type="error" />;
};
