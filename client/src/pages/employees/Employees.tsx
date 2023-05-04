import { PlusCircleOutlined } from "@ant-design/icons";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { Layout } from "../../components/layout/Layout";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import type { ColumnsType } from "antd/es/table";
import { Employee } from "@prisma/client";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEffect } from "react";

const columns: ColumnsType<Employee> = [
  {
    title: "Имя",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Возраст",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Адрес",
    dataIndex: "adress",
    key: "address",
  },
];

export const Employees = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <Layout>
      <CustomButton
        type="primary"
        onClick={() => null}
        icon={<PlusCircleOutlined />}
      >
        Добавить
      </CustomButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(employee) => employee.id}
        onRow={(employee) => {
          return {
            onClick: () => navigate(`${Paths.employee}/${employee.id}`),
          };
        }}
      />
    </Layout>
  );
};
