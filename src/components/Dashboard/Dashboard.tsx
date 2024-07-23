import {
  Layout,
  Tabs,
  Button,
  Dropdown,
  Menu,
  Input,
  Space,
  SelectProps,
  Select,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Dashboard.scss";
import cardData from "../../../public/mock/cards.json";
import Card from "./Card/Card";

const { Content, Sider } = Layout;
const { TabPane } = Tabs;
const { Search } = Input;

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const Dashboard: React.FC = () => {
  const actionMenu = (
    <Menu>
      <Menu.Item key="0">Action 1</Menu.Item>
      <Menu.Item key="1">Action 2</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="app-dashboard">
      <Content>
        <div className="header">
          <div className="title">Deals</div>
          <div className="filters">
            <Tabs defaultActiveKey="2">
              <TabPane tab="Table" key="1"></TabPane>
              <TabPane tab="Pipeline" key="2"></TabPane>
            </Tabs>
            <Search placeholder="Search..." style={{ width: 200 }} />
            <Dropdown
              className="action-dd"
              overlay={actionMenu}
              trigger={["click"]}
            >
              <Button>
                Actions <DownOutlined />
              </Button>
            </Dropdown>
            <Button className="deal" type="primary">
              Create Deal
            </Button>
          </div>
        </div>
        <hr style={{ margin: "10px 24px 30px 24px" }} />
        <Layout>
          <Sider className="sider-section">
            <Space direction="vertical" style={{ width: "100%" }}>
              <div className="sider-section-item">
                <label>Pipeline</label>
                <Select defaultValue="a1" options={options} />
              </div>
              <div className="sider-section-item">
                <label>Pipeline</label>
                <Select defaultValue="a1" options={options} />
              </div>
              <hr />
              <span>84 Deals</span>
              <Button>
                <Space>Add Filter</Space>
              </Button>
            </Space>
          </Sider>

          <Content
            className="app-content"
            style={{ padding: "0 24px", minHeight: 280 }}
          >
            {cardData.map((data) => (
              <Card data={data} />
            ))}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Dashboard;
