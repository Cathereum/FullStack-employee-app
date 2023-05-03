import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout/Layout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { PasswordInput } from "../../components/password-input/PasswordInput";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегестрируйтесь</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
