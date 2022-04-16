import React from "react";
import { Popover, Typography, List, Divider, Button } from "antd";
import { useProjects } from "utils/project";
import styled from "@emotion/styled";
import { ButtonNoPadding } from "./lib";
import { useDispatch } from "react-redux";
import { projectListActions } from "screens/project-list/project-list.slice";

export const ProjectPopover = () =>
  //   props: {
  // //   setProjectModalOpen: (isOpen: boolean) => void;
  // projectButton:JSX.Element
  //   }
  {
    //   let { setProjectModalOpen } = props;
    // let { projectButton } = props;
    const { data: projects, isLoading } = useProjects();
    const pinnedProjects = projects?.filter((project) => project.pin);
    const dispatch = useDispatch();
    const content = (
      <ContentContainer>
        <Typography.Text type="secondary">收藏项目</Typography.Text>
        <List>
          {pinnedProjects?.map((project) => (
            <List.Item>
              <List.Item.Meta title={project.name} />
            </List.Item>
          ))}
        </List>
        <Divider />
        <ButtonNoPadding
          type="link"
          onClick={() => dispatch(projectListActions.openProjectModal())}
        >
          创建项目
        </ButtonNoPadding>
        {/* {projectButton} */}
      </ContentContainer>
    );
    return (
      <Popover placement="bottom" content={content}>
        项目
      </Popover>
    );
  };
const ContentContainer = styled.div`
  min-width: 30rem;
`;
