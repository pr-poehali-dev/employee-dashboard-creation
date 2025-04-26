
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TasksWidgetProps {
  initialTasks: Task[];
}

const TasksWidget = ({ initialTasks }: TasksWidgetProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          Задачи на сегодня
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                id={`task-${task.id}`}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={`text-sm ${
                  task.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {task.title}
              </label>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-2">
            На сегодня задач нет
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TasksWidget;
