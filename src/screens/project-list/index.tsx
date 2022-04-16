import { useState } from "react";
import React from "react";
import { Row, Typography, Button } from "antd";
import SearchPanel from "./search-panel";
import List from "./list";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { useDispatch } from "react-redux";
import { ButtonNoPadding } from "components/lib";
import { projectListActions } from "./project-list.slice";

const ProjectListScreen = (props: {
  // setProjectModalOpen: (isOpen: boolean) => void;
  projectButton: JSX.Element;
}) => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 500);
  // const [users, setUsers] = useState([]);
  // const client = useHttp();
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   run( client("projects", { data: cleanObject(debouncedParam) }))
  // setIsLoading(true)

  //   .catch(error => {
  //     setError(error);
  //     setList([])
  //   })
  //   .finally(()=>setIsLoading(false));
  // fetch(
  //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
  // ).then(async (response) => {
  //   if (response.ok) {
  //     setList(await response.json());
  //   }
  // });
  //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debouncedParam]);
  // useMount(() => {
  //   client("users").then(setUsers);
  // fetch(`${apiUrl}/users`).then(async (response) => {
  //   if (response.ok) {
  //     setUsers(await response.json());
  //   }
  // });
  // });
  useDocumentTitle("项目列表", false);
  // let { setProjectModalOpen } = props;
  return (
    <Container>
      <Row>
        <h1>项目列表</h1>
        <ButtonNoPadding
          style={{ marginLeft: "170vh" }}
          onClick={() => dispatch(projectListActions.openProjectModal())}
          type="link"
        >
          创建项目
        </ButtonNoPadding>
        <div
        // style={{ marginLeft: "170vh" }}
        >
          {/* {props.projectButton} */}
        </div>
      </Row>

      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        projectButton={props.projectButton}
        // setProjectModalOpen={setProjectModalOpen}
        users={users || []}
        dataSource={list || []}
      />
    </Container>
  );
};
export default ProjectListScreen;
const Container = styled.div`
  padding: 3.2rem;
`;
