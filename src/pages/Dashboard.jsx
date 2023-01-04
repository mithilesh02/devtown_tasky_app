import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// css
import "./Dashboard.css";

// components
import { SideBar, Topbar, PrimaryButton, Task } from "../components";

const Dashboard = () => {
  const { listId } = useParams();
  const [displayMenu, setDisplayMenu] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [listTitle, setListTitle] = useState("");

  const [taskLists, setTaskLists] = useState([
    {
      id: 0,
      title: "How it works?",
      tasks: [
        {
          text: "Create a new list by using sidebar.",
          completed: false,
        },
      ],
    },
  ]);

  // getting data from local storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("taskLists"));
    if (data) setTaskLists(data);
    console.log("data: ", data);
  }, []);

  // to store data in local storage
  useEffect(() => {
    localStorage.setItem("taskLists", JSON.stringify(taskLists));
    console.log("Task Lists :", taskLists);
  }, [taskLists]);

  const createNewTask = () => {
    if (newTask.trim() === "") return alert("Please enter a task");

    const task = {
      text: newTask,
      completed: false,
    };

    const newTaskLists = [...taskLists];
    newTaskLists[listId].tasks.push(task);
    setTaskLists(newTaskLists);

    // input cleaning
    setNewTask("");
  };

  const renameList = (newTitle) => {
    const newTaskLists = [...taskLists];
    newTaskLists[listId].title = newTitle;
    setTaskLists(newTaskLists);

    // input cleaning
    setListTitle("");
  };

  return (
    <div
      className={`dashboardContainer ${
        displayMenu ? "sidebarOpen" : "sidebarClosed"
      }`}
    >
      <SideBar
        displayMenu={displayMenu}
        taskLists={taskLists}
        setTaskLists={setTaskLists}
      />
      <section className="mainContainer">
        <Topbar displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
        <div className="mainContent">
          <div className="mainHeader">
            <h1>
              <input
                style={{
                  fontSize: "2rem",
                  background: "transparent",
                  border: "dashed 1px #e3e3e3",
                  fontWeight: "bold",
                  width: "100%",
                  padding: "1rem !important",
                }}
                onChange={(e) => setListTitle(e.target.value)}
                onKeyPress={(e) => {
                  e.key === "Enter" && renameList(listTitle);
                }}
                value={listTitle}
                placeholder={taskLists[listId]?.title}
              />
            </h1>
            <div className="addTaskCard">
              <h4>Create New Task</h4>
              <div className="createNewTaskInput">
                <input
                  name="newTask"
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => {
                    e.key === "Enter" && createNewTask();
                  }}
                  value={newTask}
                  type="text"
                  placeholder="Add something ..."
                />
                <PrimaryButton onClick={createNewTask} />
              </div>
            </div>
          </div>
          {taskLists[listId]?.tasks?.map((task, index) => (
            <Task
              taskLists={taskLists}
              setTaskLists={setTaskLists}
              key={index}
              currentIndex={index}
              {...task}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
