
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { UserCircle, Calendar, BookOpen, Trophy } from "lucide-react";

const ProfileNavigation = () => {
  return (
    <NavigationMenu className="max-w-full w-full bg-white shadow-sm mb-6">
      <NavigationMenuList className="flex-wrap px-4 py-2 justify-start">
        <NavigationMenuItem>
          <Link to="/profile">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <UserCircle className="mr-2 h-4 w-4" />
              Профиль
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/profile/schedule">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Calendar className="mr-2 h-4 w-4" />
              График
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/profile/education">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <BookOpen className="mr-2 h-4 w-4" />
              Обучение
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/profile/rating">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Trophy className="mr-2 h-4 w-4" />
              Рейтинг
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProfileNavigation;
