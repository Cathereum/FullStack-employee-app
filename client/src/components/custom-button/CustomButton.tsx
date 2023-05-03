import { Button, Form } from "antd";

interface ICustomButton {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
}

export const CustomButton = ({
  children,
  htmlType = "button",
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}: ICustomButton) => {
  return (
    <Form.Item>
      <Button
        onClick={onClick}
        icon={icon}
        shape={shape}
        loading={loading}
        danger={danger}
        type={type}
        htmlType={htmlType}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
