import { Button, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getStaffApiData } from "../../Services/api";

const Staff = () => {
  const [staffData, setStaffData] = useState([]);

  const columns = staffData.length > 0 ? Object.keys(staffData[0]) : [];
  console.log(columns);

  const cols = [
    {
      title: "Staff No",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Staff Name",
      dataIndex: "staff_name",
      key: "staff_name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  useEffect(() => {
    getStaffApiData().then((res) => setStaffData(res));
  }, []);

  return (
    <div>
      <h1>This is staff page</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Input.Search></Input.Search>
        </div>
        <div>
          <Button>Add Staff</Button>
        </div>
      </div>
      <div style={{ marginTop: "14px" }}>
        {staffData.length > 0 ? (
          <>
            <Table dataSource={staffData} columns={cols} pagination={false} />
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

export default Staff;
