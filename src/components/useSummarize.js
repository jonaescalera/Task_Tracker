import { useSelector } from "react-redux";
import { tasksSelectors } from "../redux/reducers/tasks";
import states from "./constants";

export default function useSummarize() {
  const tasks = useSelector(tasksSelectors.selectAll);
  if (!tasks) {
    return [];
  }

  return states.reduce((prev, current) => {
    const sum = tasks
      .filter((t) => t.stateId === current.id)
      .reduce((total, t) => total + parseInt(t.estimate, 10), 0);

    prev.push({
      state: current.description,
      sum,
    });
    return prev;
  }, []);
}
