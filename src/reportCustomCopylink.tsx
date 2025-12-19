import { Modal, Typography } from "antd";



const { Title, Text } = Typography;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ReportCustomCopylink({ open, onClose }: Props) {


  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={700}
      closeIcon
    >
  
      <Title level={3} style={{ marginBottom: 0 }}>
          ReportCustomCopylink
      </Title>
      <Text type="secondary">This is not yet developed</Text>

 
    </Modal>
  );
}
