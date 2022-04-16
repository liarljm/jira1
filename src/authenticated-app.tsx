import { useAuth } from "context/auth_context";
import React, { useState } from "react";
import ProjectListScreen from "screens/project-list";
import { Button, Dropdown, Menu } from "antd";
import { ButtonNoPadding } from "components/lib";
import styled from "@emotion/styled";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { Row } from "components/lib";
import { ProjectScreen } from "screens/project";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { ProjectModal } from "screens/project-list/project-modal";
import { ProjectPopover } from "components/project-popover";
import { resetRoute } from "utils";
import { projectListActions } from "screens/project-list/project-list.slice";
import { useDispatch } from "react-redux";
export const AuthenticatedApp = () => {
  // const [projectModalOpen, setProjectModalOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Container>
      <PageHeader //setProjectModalOpen={setProjectModalOpen}
      // projectButton={ }
      />
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={"/projects"} />} />
            <Route
              path={"/projects"}
              element={
                <ProjectListScreen
                  //  setProjectModalOpen={setProjectModalOpen}
                  projectButton={
                    <ButtonNoPadding
                      type="link"
                      onClick={() =>
                        dispatch(projectListActions.openProjectModal)
                      }
                    >
                      创建项目
                    </ButtonNoPadding>
                  }
                />
              }
            />
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
          </Routes>
        </Router>
      </Main>
      <ProjectModal
      // projectModalOpen={projectModalOpen}
      // onClose={() => setProjectModalOpen(false)}
      />
    </Container>
  );
};
const User = () => {
  const { logout, user } = useAuth();
  return (
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
  );
};
const PageHeader = () =>
  // props: {
  // // setProjectModalOpen: (isOpen: boolean) => void;
  // projectButton:JSX.Element
  // }
  {
    // let { setProjectModalOpen } = props;
    return (
      <Header between={true}>
        <HeaderLeft gap={true}>
          <Button type="link" onClick={resetRoute} style={{ padding: "0" }}>
            <SoftwareLogo width="18rem" color="rgb(38,132,255)" />
          </Button>
          <ProjectPopover
          // {/* // {...props} */}
          //setProjectModalOpen={setProjectModalOpen}
          />

          <span>用户</span>
        </HeaderLeft>
        <HeaderRight>
          <User />
        </HeaderRight>
      </Header>
    );
  };
//temporal dead zone(暂时性死区)
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
