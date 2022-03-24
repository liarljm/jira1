import { useAuth } from "context/auth_context";
import React from "react";
import ProjectListScreen from "screens";
import { Button } from "antd";
import styled from "@emotion/styled";
import { Row } from "components/lib";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <PageHeader />

      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};
const PageHeader = styled.header`
  height: 6rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;
const Main = styled.main`
  height: calc(100vh-6rem);
`;
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const HeaederItem = styled.span`
  margin-right: 3rem;
`;
// grid和flex应用场景
// 一维布局flex，二维布局grid
//内容出发flex，布局出发grid
