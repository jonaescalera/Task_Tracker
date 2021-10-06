import "./App.css";
import TaskTracker from "../src/components/TaskTracker";

export default function App({ children }) {
  return (
    <div className="app-container">
      <TaskTracker />
    </div>
  );
}
