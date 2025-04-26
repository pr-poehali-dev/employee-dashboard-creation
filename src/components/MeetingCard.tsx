
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Users, MessageSquare } from "lucide-react";

interface MeetingItem {
  time: string;
  title: string;
  participants: number;
  hasNewMessages?: boolean;
}

const MeetingCard = ({ meetings }: { meetings: MeetingItem[] }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Users className="h-5 w-5 text-purple-600" />
          Планерки
        </CardTitle>
      </CardHeader>
      <CardContent>
        {meetings.length > 0 ? (
          <ul className="space-y-3">
            {meetings.map((meeting, index) => (
              <li key={index} className="flex justify-between items-start p-2 rounded-md hover:bg-gray-50">
                <div>
                  <div className="font-medium text-sm">{meeting.title}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <CalendarClock className="h-3 w-3" />
                    <span>{meeting.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{meeting.participants}</span>
                  </div>
                  {meeting.hasNewMessages && (
                    <div className="text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>Новые</span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-8">Нет запланированных планерок</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
