import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  CompassOutlined,
  BarChartOutlined,
  AudioOutlined,
  CustomerServiceOutlined,
  AppstoreOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Badge, Divider } from "antd";
import AppRouter from "../../router/Approuter";
import zing from "../../img/zing.png";
const { Sider, Content } = Layout;

const SidebarContent: React.FC = () => {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        {/* Sidebar */}
        <Sider width={250} style={{ background: "#231b2e" }}>
          <div style={{ padding: 20 }}>
            <a href="/library">
              <img
                src={zing}
                alt="Zing MP3"
                style={{ height: 70, cursor: "pointer", marginLeft: 10 }}
              />
            </a>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            style={{
              background: "#231b2e",
              borderRight: "none",
              flex: 1,
            }}
          >
            <Menu.Item key="1" icon={<CustomerServiceOutlined />}>
              <Link to="/library">Thư Viện</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CompassOutlined />}>
              <Link to="/discover">Khám Phá</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>
              <Link to="/chart">#zingchart</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<AudioOutlined />}>
              <Link to="/radio">
                <Badge
                  count="LIVE"
                  style={{ background: "#ff4d4f", fontSize: 10 }}
                />
                <span style={{ marginLeft: 8 }}>Radio</span>
              </Link>
            </Menu.Item>

            <Divider style={{ borderColor: "#393243", margin: "12px 0" }} />

            <Menu.Item key="5" icon={<CustomerServiceOutlined />}>
              <Link to="/new-music">BXH Nhạc Mới</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              <Link to="/category">Chủ Đề & Thể Loại</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<TrophyOutlined />}>
              <Link to="/top-100">Top 100</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Main Content */}
        <Layout>
          <Content
            style={{ padding: 24, overflowY: "auto", background: "#170f23" }}
          >
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default SidebarContent;
