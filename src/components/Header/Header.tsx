import React from "react";
import {
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Button, Avatar } from "antd";

const HeaderContent: React.FC = () => {
  return (
    <header
      style={{
        background: "#231b2e",
        padding: "0 16px",
        height: 64,
        borderBottom: "1px solid #393243",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={<LeftOutlined />}
          style={{ color: "#a0a0a0", marginRight: 8 }}
        />
        <Button
          type="text"
          icon={<RightOutlined />}
          style={{ color: "#a0a0a0", marginRight: 16 }}
        />

        <Input
          prefix={<SearchOutlined style={{ color: "#a0a0a0" }} />}
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          style={{
            background: "#2f2739",
            borderRadius: 20,
            width: 360,
            color: "#e8e8e8",
            border: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="primary"
          style={{
            background: "#9b4de0",
            marginRight: 16,
            borderRadius: 20,
          }}
        >
          Nâng cấp tài khoản
        </Button>
        <Button
          icon={<DownloadOutlined />}
          style={{
            background: "#2f2739",
            color: "white",
            border: "none",
            borderRadius: 20,
            marginRight: 16,
          }}
        >
          Tải bản Windows
        </Button>
        <Button
          type="text"
          icon={<SettingOutlined />}
          style={{ color: "#e8e8e8", marginRight: 16 }}
        />
        <Avatar icon={<UserOutlined />} style={{ background: "#2f2739" }} />
      </div>
    </header>
  );
};

export default HeaderContent;
