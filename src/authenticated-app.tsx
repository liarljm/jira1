import { useAuth } from "context/auth_context";
import React from "react";
import ProjectListScreen from "screens/project-list";
import { Button, Dropdown, Menu } from "antd";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width="18rem" color="rgb(38,132,255)" />

          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="logout">
                  <Button type="link" onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="link" onClick={(e) => e.preventDefault()}>
              Hi,{user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      {/* <PageHeader /> */}

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
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Main = styled.main`
  /* display: flex;
  overflow:hidden; */
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const HeaederItem = styled.span`
  margin-right: 3rem;
`;
// grid和flex应用场景
// 一维布局flex，二维布局grid
//内容出发flex，布局出发grid
