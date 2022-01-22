import React from "react";
import { useTasks } from "../../queries/TaskQuery";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const TaskPage: React.VFC = () => {

    return (
    <>
        <TaskInput />
        <TaskList />
    </>

  );
}

export default TaskPage
