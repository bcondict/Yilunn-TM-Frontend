import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./index.module.css"
import "@fontsource/ubuntu"
import TaskListContent from "../components/TaskListContent";
import AddTaskScreen from "../components/AddTaskScreen";

export default function Home() {
  // const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5555/tasks")
  //     .then((res) => {
  //       setTasks(res.data.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, []);

  return (
    <div
      className={styles.container}
      style={{
      }}
    >
      <div
        className={styles.customBackground}
        align="center"
      >
        <h1 align="Center">Today's task</h1>

        <TaskList summary={"Doing homework"}>task 1</TaskList>
        <TaskList summary={"My shopping list"}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"Something I don't know"}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"puede ser "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"some some some some some some some some some some some some some some"}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>

      </div>

      <AddTaskScreen/>
      <AddTaskButton/>
    </div>
  )
}
