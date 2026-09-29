import {
  AppstoreOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

export const menuitems = [
  {
    key: "students",
    icon: React.createElement(UserOutlined),
    label: "Students",
    onClick: () => navigate("/students"),
  },
  {
    key: "staff",
    icon: React.createElement(TeamOutlined),
    label: "Staff",
    onClick: () => navigate("/staff"),
  },
  {
    key: "subjects",
    icon: React.createElement(BookOutlined),
    label: "Subjects",
    onClick: () => navigate("/subjects"),
  },
  {
    key: "classes",
    icon: React.createElement(AppstoreOutlined),
    label: "Classes",
    onClick: () => navigate("/classes"),
  },
];
