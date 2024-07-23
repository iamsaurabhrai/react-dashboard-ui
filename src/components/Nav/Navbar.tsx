import { Layout, Menu, Avatar, Input, Dropdown, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "./Navbar.scss";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="1">Logout</Menu.Item>
    </Menu>
  );

  const baseClass = "app-navbar";

  return (
    <Header className={baseClass}>
      <div className="logo">Logo</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.SubMenu key="sub1" title="Item 2">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" title="Item 3">
          <Menu.Item key="4">Option 1</Menu.Item>
          <Menu.Item key="5">Option 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub3" title="Item 4">
          <Menu.Item key="6">Option 1</Menu.Item>
          <Menu.Item key="7">Option 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub4" title="Item 5">
          <Menu.Item key="8">Option 1</Menu.Item>
          <Menu.Item key="9">Option 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub5" title="Item 6">
          <Menu.Item key="10">Option 1</Menu.Item>
          <Menu.Item key="11">Option 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Input placeholder="Search..." />
      <Dropdown overlay={userMenu} trigger={["click"]}>
        <Space>
          <Avatar src="https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=1024x1024&w=is&k=20&c=-P5uHiSsLTF9Tt70-I2XKXqYYqjqbUpo0YcTw4489hA=" />

          <CaretDownOutlined />
          <div className="user-info">
            <span>user@email.com</span>
          </div>
        </Space>
      </Dropdown>
    </Header>
  );
};

export default Navbar;
