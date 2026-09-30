import { Button, Form, Input, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getStudentsApiData, postStudentsApiData } from "../../Services/api";
import Search from "antd/es/input/Search";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    const payload = {
      stu_id: form.getFieldValue("stu_id"),
      stu_name: form.getFieldValue("stu_name"),
    };

    postStudentsApiData(payload);

    form.resetFields();
    setIsOpen(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    const filteredStudents = studentsData.filter((student) =>
      student.stu_name.toLowerCase().includes(inputSearch.toLowerCase()),
    );
    setSearchData(filteredStudents);
  };

  useEffect(() => {
    getStudentsApiData().then((res) => {
      setStudentsData(res);
      setSearchData(res);
    });
  }, [studentsData]);

  return (
    <div>
      <h1>This is students page</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            name="search"
            placeholder="search name..."
            onChange={handleSearch}
          />
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
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={}
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
        </Form>
      </Modal>
      <div style={{ marginTop: "14px" }}>
        {studentsData.length > 0 ? (
          <>
            <Table dataSource={studentsData} columns={cols} pagination={true} />
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
