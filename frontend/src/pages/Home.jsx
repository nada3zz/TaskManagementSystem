import NavBar from "../components/NavBar/NavBar";
import CreateTask from "../components/TaskForm/CreateTask";
import TaskList from "../components/TasksList/TasksList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default Home;


