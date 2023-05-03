import { Form, Input } from "antd";

interface ICustomInput {
  name: string;
  placeholder: string;
  type?: string;
}

export const CustomInput = ({
  name,
  placeholder,
  type = "text",
}: ICustomInput) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
