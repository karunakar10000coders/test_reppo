import { Button, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getStudentsApiData } from "../../Services/api";
import Search from "antd/es/input/Search";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);

  const columns = studentsData.length > 0 ? Object.keys(studentsData[0]) : [];
  console.log(columns);

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
          <Button>Add Student</Button>
        </div>
      </div>
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
