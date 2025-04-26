
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Clock } from "lucide-react";

interface ScheduleItem {
  startTime: string;
  endTime: string;
  title: string;
}

interface ScheduleCardProps {
  date: Date;
  items: ScheduleItem[];
}

const ScheduleCard = ({ date, items }: ScheduleCardProps) => {
  const formattedDate = format(date, "d MMMM, EEEE", { locale: ru });
  const isToday = format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>{formattedDate}</span>
          {isToday && (
            <span className="text-xs font-normal bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              Сегодня
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.length > 0 ? (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 pb-2 border-b last:border-0">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{item.startTime} - {item.endTime}</span>
                </div>
                <div className="text-sm font-medium">{item.title}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-6">Нет запланированных мероприятий</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
