import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeQuery } from "../../app/services/employees";
import { useEditEmployeeMutation } from "../../app/services/employees";
import { Layout } from "../../components/layout/Layout";
import { Row } from "antd";
import { EmployeeForm } from "../../components/employee-form/EmployeeForm";
import { Employee } from "@prisma/client";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";

export const EditEmployee = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [editEmployee] = useEditEmployeeMutation();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  const handleEditUser = async (employee: Employee) => {
    try {
      const edited = { ...data, ...employee };
      await editEmployee(edited).unwrap();
      navigate(`${Paths.status}/updated`);
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
          title="Редактировать сотрудника"
          btnText="Редактировать"
          error={error}
          employee={data}
          onFinish={handleEditUser}
        />
      </Row>
    </Layout>
  );
};
