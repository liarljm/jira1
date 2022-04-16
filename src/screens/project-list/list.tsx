import React from "react";
import { User } from "./search-panel";
import { Dropdown, Menu, Table } from "antd";
import { TableProps } from "antd/es/table";
import dayjs from "dayjs";
import { ButtonNoPadding } from "components/lib";
import { useDispatch } from "react-redux";
import { projectListActions } from "./project-list.slice";
export interface Project {
  id: number;
  name: string;
  personId: string | number;
  pin: boolean;
  organization: string;
  created: number;
}
interface ListProps extends TableProps<Project> {
  users: User[];
  refresh?: () => void;
  // setProjectModalOpen: (isOpen: boolean) => void;
  projectButton: JSX.Element;
}
const List = ({ users, ...props }: ListProps) => {
  // const { setProjectModalOpen } = props;
  const { projectButton } = props;
  // console.log("users", users);
  const dispatch = useDispatch();

  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        {},
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },

        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user: User) => user.id === project.personId)
                  ?.name || "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
        },
        {
          render(value, project) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={"edit"}>
                      <ButtonNoPadding
                        type="link"
                        onClick={() =>
                          dispatch(projectListActions.openProjectModal())
                        }
                      >
                        编辑
                      </ButtonNoPadding>
                      {/* {projectButton} */}
                    </Menu.Item>
                  </Menu>
                }
              >
                <ButtonNoPadding type="link">...</ButtonNoPadding>
              </Dropdown>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
export default List;
