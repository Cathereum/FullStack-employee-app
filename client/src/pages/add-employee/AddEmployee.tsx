import { Row } from "antd";
import { Layout } from "../../components/layout/Layout";
import { EmployeeForm } from "../../components/employee-form/EmployeeForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useAddEmployeeMutation } from "../../app/services/employees";
import { Paths } from "../../paths";
import { Employee } from "@prisma/client";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";

export const AddEmployee = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [addEmployee] = useAddEmployeeMutation();

  useEffect(() => {
    if (!user) {
      navigate(Paths.login);
    }
  }, [navigate, user]);

  const handleAddEmployee = async (data: Employee) => {
    try {
      await addEmployee(data).unwrap();
      navigate(`${Paths.status}/created`);
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
      <Row align="middle" justify="center">
        <EmployeeForm
          onFinish={handleAddEmployee}
          btnText="Добавить"
          title="Добавить сотрудника"
          error={error}
        />
      </Row>
    </Layout>
  );
};
