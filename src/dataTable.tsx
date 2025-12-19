import { useState } from "react";
import "./dataTables.css";
import { employees } from "./data";
import { Table, Button, Tag } from "antd";
import EmployeeModal from "./employeeModal";
import { EyeOutlined } from '@ant-design/icons';

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  status: string;
  action: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  salary: number;
};

export default function DataTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] =
    useState<Employee | null>(null);

  const handleView = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "SL no",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color: "success" | "warning" | "error" | "default";

        switch (status.toLowerCase()) {
          case "active":
            color = "success";
            break;
          case "inactive":
            color = "warning";
            break;
          case "on leave":
          case "leave":
            color = "error";
            break;
          default:
            color = "default";
        }

        return (
          <Tag color={color}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },



    {
      title: "Action",
      key: "action",
      render: (_: any, record: Employee) => (
        <Button type="link" onClick={() => handleView(record)} icon>
          <EyeOutlined />View
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={employees}
        columns={columns}
        rowKey="id"

      />

      {isModalOpen && <EmployeeModal
        open={isModalOpen}
        employee={selectedEmployee}
        onClose={() => setIsModalOpen(false)}
      />}

    </>
  );
}
