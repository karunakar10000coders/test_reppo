import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { menuitems } from "../../Data/menuItems";
import Students from "../../Pages/Students/Students";
import Staff from "../../Pages/Staff/Staff";
const { Header, Content, Footer, Sider } = Layout;

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
          items={menuitems}
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
            <Students />
            <Staff />
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
