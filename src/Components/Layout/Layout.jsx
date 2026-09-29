import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { menuitems } from "../../Data/menuItems";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import {
  AppstoreOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const layoutStyle = {
  minHeight: "100vh",
};

const siderStyle = {
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 10,
};

const LayoutD = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const currentYear = new Date().getFullYear();
  return (
    <Layout style={layoutStyle}>
      <Sider
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        style={siderStyle}
        trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onCollapse={setCollapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          //   theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
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
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 240,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{currentYear} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutD;
