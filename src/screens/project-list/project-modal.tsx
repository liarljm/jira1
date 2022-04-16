import React from "react";
import { Drawer, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListActions,
  selectProjectModalOpen,
} from "./project-list.slice";
export const ProjectModal = () =>
  //   props: {
  //   projectModalOpen: boolean;
  //   onClose: () => void;
  // }
  {
    // const { projectModalOpen, onClose } = props;
    const dispatch = useDispatch();
    const projectModalOpen = useSelector(selectProjectModalOpen);
    return (
      <Drawer
        width={"100%"}
        visible={projectModalOpen}
        onClose={() => dispatch(projectListActions.closeProjectModal())}
      >
        <h1>Project Modal</h1>
        <Button
          onClick={() => dispatch(projectListActions.closeProjectModal())}
        >
          关闭
        </Button>
      </Drawer>
    );
  };
