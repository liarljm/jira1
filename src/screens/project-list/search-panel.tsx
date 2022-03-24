import React from "react";
import { Input, Select, Form } from "antd";
const { Option } = Select;
export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  title: string;
  organization: string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout="inline" style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          type="text"
          placeholder="项目名"
          value={param.name}
          onChange={(ev) =>
            setParam({
              ...param,
              name: ev.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Option value="">负责人</Option>
          {users.map((user) => (
            <Option value={user.id} key={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
export default SearchPanel;
