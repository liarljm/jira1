import { useState, useEffect } from "react";
import React from "react";
import { Typography } from "antd";
import { Project } from "./list";
import * as qs from "qs";
import SearchPanel from "./search-panel";
import List from "./list";
import { useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 500);
  // const [users, setUsers] = useState([]);
  // const client = useHttp();
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();

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
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};
export default ProjectListScreen;
const Container = styled.div`
  padding: 3.2rem;
`;
