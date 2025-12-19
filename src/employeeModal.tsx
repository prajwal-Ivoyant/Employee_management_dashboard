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
  salary : number;
};

const { Title, Text } = Typography;

type Props = {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
};

export default function EmployeeModal({ open, employee, onClose }: Props) {
  if (!employee) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
      closeIcon
      className="employee-modal"
    >
  
      <div className="employee-header">
        <Title level={3}>{employee.name}</Title>
        <Text type="secondary">{employee.position}</Text>
      </div>


      <Divider />

     
      <Title level={4}>Contact Information</Title>

      <Space size="middle" className="info-row">

        <Space>
          <MailOutlined style={{ fontSize: 18, color: "#1677ff" }} />
          <div>
            <Text type="secondary">EMAIL</Text>
            <br />
            <Text strong>{employee.email}</Text>
          </div>
        </Space>

        <Space>
          <PhoneOutlined style={{ fontSize: 18, color: "#1677ff" }} />
          <div>
            <Text type="secondary">PHONE</Text>
            <br />
            <Text strong>{employee.phone}</Text>
          </div>
        </Space>

        <Space>
          <EnvironmentOutlined style={{ fontSize: 18, color: "#1677ff" }} />
          <div>
            <Text type="secondary">LOCATION</Text>
            <br />
            <Text strong>{employee.location}</Text>
          </div>
        </Space>
      </Space>

      <Divider />


      <Title level={4}>Employment Details</Title>

      <Space size="middle" className="info-row">

        <Space>
          <ApartmentOutlined style={{ fontSize: 18, color: "#1677ff" }} />
          <div>
            <Text type="secondary">DEPARTMENT</Text>
            <br />
            <Text strong>{employee.department}</Text>
          </div>
        </Space>

        <Space>
          <CalendarOutlined style={{ fontSize: 18, color: "#1677ff" }} />
          <div>
            <Text type="secondary">JOIN DATE</Text>
            <br />
            <Text strong>{employee.joinDate}</Text>
          </div>
        </Space>

        <Space>
          <DollarOutlined style={{ fontSize: 18, color: "#1677ff" }} />
          <div>
            <Text type="secondary">SALARY</Text>
            <br />
            <Text strong>{employee.salary}</Text>
          </div>
        </Space>
      </Space>
    </Modal>
  );
}
