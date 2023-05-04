import { Employee } from "@prisma/client";
import { Card, Form, Space } from "antd";
import { CustomInput } from "../custom-input/CustomInput";
import { ErrorMessage } from "../error-message/ErrorMessage";
import { CustomButton } from "../custom-button/CustomButton";

interface IEmployeeForm<T> {
  onFinish: (value: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
}

export const EmployeeForm = ({
  onFinish,
  btnText,
  title,
  error,
  employee,
}: IEmployeeForm<Employee>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
        <CustomInput type="text" name="firstName" placeholder="Имя" />
        <CustomInput type="text" name="lastName" placeholder="Фамилия" />
        <CustomInput type="number" name="age" placeholder="Возраст" />
        <CustomInput type="text" name="adress" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};
