import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Task } from "../../../types/Task";
import { useUpdateDoneTask, useUpdateTask, useDeleteTask } from "../../../queries/TaskQuery";
import { updateTask } from "../../../api/TaskAPI";
import { toast } from "react-toastify";
 

type Props = {
  task: Task;
}

const TaskItem: React.VFC<Props> = ({ task }) => {
  const updateDoneTask = useUpdateDoneTask();
  const updateTask = useUpdateTask();
  const [editTitle, setEditTitle] = useState<string | undefined>(undefined);
  
  const handleToggleEdit = () => {
    setEditTitle(task.title);
  }

  const handleOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Escape', 'Tab'].includes(e.key)) {
      setEditTitle(undefined);
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  }

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {...task};
    if (!editTitle) {
      toast.error('タイトルを入力してください。');
      return
    }
    newTask.title = editTitle;
    updateTask.mutate({
      id: task.id,
      task: newTask
    });

    setEditTitle(undefined);
    

  }

  const itemInput = () => {
    return (
      <>
        <form onSubmit={handleUpdate}>
          <input 
            type="text"
            className="input"
            defaultValue={ editTitle }
            onChange={handleOnChange}
            onKeyDown={handleOnKey}
          />
        </form>
        <button className="btn" onClick={handleUpdate}>更新</button>
      </>
    )
  }

  const itemText = () => {
    return (
      <>
        <div onClick={ handleToggleEdit }>
          <span>{ task.title }</span>
        </div>
        <button className="btn is-delete">削除</button>
      </>
    )
  }


  return (
    <li className={task.is_done ? 'done' : ''}>
      <label className="checkbox-label">
          <input 
            type="checkbox"
            className="checkbox-input"
            onClick={() => updateDoneTask.mutate(task)}  
          />
      </label>
      {editTitle === undefined ? itemText() : itemInput() }
    </li>
  )
}

export default TaskItem;
