import {
  AppstoreOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";

export const menuitems = [
  {
    key: "students",
    icon: React.createElement(UserOutlined),
    label: "Students",
  },
  {
    key: "staff",
    icon: React.createElement(TeamOutlined),
    label: "Staff",
  },
  {
    key: "subjects",
    icon: React.createElement(BookOutlined),
    label: "Subjects",
  },
  {
    key: "classes",
    icon: React.createElement(AppstoreOutlined),
    label: "Classes",
  },
];
