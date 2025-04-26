
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ClipboardEdit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 gap-3">
          <Button 
            onClick={() => navigate("/schedule")} 
            variant="outline" 
            className="flex items-center justify-start gap-2 h-10"
          >
            <Calendar className="h-5 w-5 text-blue-500" />
            Мой график
          </Button>
          
          <Button 
            onClick={() => navigate("/schedule/change-request")} 
            variant="outline" 
            className="flex items-center justify-start gap-2 h-10"
          >
            <ClipboardEdit className="h-5 w-5 text-amber-500" />
            Заявка на изменение графика
          </Button>
          
          <Button 
            onClick={() => navigate("/training")} 
            variant="outline" 
            className="flex items-center justify-start gap-2 h-10"
          >
            <BookOpen className="h-5 w-5 text-emerald-500" />
            Обучение
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionButtons;
