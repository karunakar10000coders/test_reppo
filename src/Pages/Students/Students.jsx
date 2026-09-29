import { Button, Form, Input, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getStudentsApiData } from "../../Services/api";
import Search from "antd/es/input/Search";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [student, setStudent] = useState({
    stu_id: 0,
    stu_name: "",
  });

  const [form] = Form.useForm();

  const cols = [
    {
      title: "Student No",
      dataIndex: "stu_id",
      key: "stu_id",
    },
    {
      title: "Student Name",
      dataIndex: "stu_name",
      key: "stu_name",
    },
  ];

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    form.resetFields();
    setIsOpen(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    getStudentsApiData().then((res) => setStudentsData(res));
  }, []);

  return (
    <div>
      <h1>This is students page</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Input.Search></Input.Search>
        </div>
        <div>
          <Button onClick={handleClick}>Add Student</Button>
        </div>
      </div>
      //modal
      <Modal
        title="Add Student"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isOpen}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Student Name"
            name="stu_name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Id"
            name="stu_id"
            rules={[{ required: true, message: "Please input your id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div style={{ marginTop: "14px" }}>
        {studentsData.length > 0 ? (
          <>
            <Table
              dataSource={studentsData}
              columns={cols}
              pagination={false}
            />
          </>
        ) : (
          <>
            <p>No table found</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Students;
