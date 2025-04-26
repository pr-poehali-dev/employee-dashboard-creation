
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MeetingWidgetProps {
  date?: string;
  time?: string;
  title?: string;
  link?: string;
}

const MeetingWidget = ({ date, time, title, link }: MeetingWidgetProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CalendarClock className="h-5 w-5 text-blue-500" />
          Ближайшая планерка
        </CardTitle>
      </CardHeader>
      <CardContent>
        {title ? (
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {date} в {time}
              </p>
            </div>
            {link && (
              <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                Подключиться
              </Button>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-2">
            Нет ближайших планерок
          </p>
        )}
        <div className="mt-3 text-center">
          <Button variant="link" size="sm" className="text-blue-600">
            Все планерки
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetingWidget;
