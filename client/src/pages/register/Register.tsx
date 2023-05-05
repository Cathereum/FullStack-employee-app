import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout/Layout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { PasswordInput } from "../../components/password-input/PasswordInput";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useState } from "react";
import { useRegisterMutation } from "../../app/services/auth";
import { User } from "@prisma/client";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import { ErrorMessage } from "../../components/error-message/ErrorMessage";

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState("");
  const [register] = useRegisterMutation();

  const registerUser = async (data: RegisterData) => {
    try {
      await register(data).unwrap();
      navigate(Paths.home);
    } catch (err) {
      const isError = isErrorWithMessage(err);
      if (isError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <Card title="Зарегестрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={registerUser}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton type="primary" htmlType="submit">
              Зарегестрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегестрированы?{" "}
              <Link to={Paths.login}>Войти в аккаунт</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
