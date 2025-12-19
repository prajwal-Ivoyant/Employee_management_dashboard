import { Modal, Typography, Divider, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ApartmentOutlined,
  CalendarOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import './employeeModal.css'

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

const { Title, Text } = Typography;

type Props = {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
};

type extraInfo = {
  lable: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function EmployeeModal({ open, employee, onClose }: Props) {
  if (!employee) return <> </>;

  const contactInfo: extraInfo[] = [
    {
      lable: "EMAIL",
      value: employee.email,
      icon: <MailOutlined />
    },
    {
      lable: "PHONE",
      value: employee.phone,
      icon: <PhoneOutlined />
    },
    {
      lable: "LOCATION",
      value: employee.location,
      icon: <EnvironmentOutlined />
    }
  ]

  const EmploymentDetail: extraInfo[] = [
    {
      lable: "DEPARTMENT",
      value: employee.department,
      icon: <ApartmentOutlined />
    },
    {
      lable: "JOIN DATE",
      value: employee.joinDate,
      icon: <CalendarOutlined />
    },
    {
      lable: "SALARY",
      value: employee.salary,
      icon: <DollarOutlined />
    }
  ]

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
      closeIcon
      className="employee-modal"
    >

      <div >
        <Title level={3}>{employee.name}</Title>
        <Text type="secondary">{employee.position}</Text>
      </div>


      <Divider />


      <Title level={4}>Contact Information</Title>

      <Space size="middle" className="info-row">

        {contactInfo.map((item) => (
          <Space>
            {item.icon}
            <div>
              <Text type="secondary">{item.lable}</Text>
              <br />
              <Text strong>{item.value}</Text>
            </div>
          </Space>
        ))}

      </Space>

      <Divider />


      <Title level={4}>Employment Details</Title>

      <Space size="middle" className="info-row">

        {EmploymentDetail.map((item) => (
          <Space>
            {item.icon}
            <div>
              <Text type="secondary">{item.lable}</Text>
              <br />
              <Text strong>{item.value}</Text>
            </div>
          </Space>
        ))}


      </Space>
    </Modal>
  );
}
