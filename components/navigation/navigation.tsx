import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu/dropdown-menu";
import SVGIcon from "../svg-icon";

const Navigation = () => {
  const navItems = [
    { label: "Plastic cards", hasDropdown: true },
    { label: "Organic cards", hasDropdown: true },
    { label: "RFID/Chip cards", hasDropdown: true },
    { label: "Special formats", hasDropdown: true },
    { label: "Personalization", hasDropdown: true },
    { label: "Printer & Accessories", hasDropdown: true },
    { label: "Service", hasDropdown: true },
  ];

  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);

  const renderNavItem = (
    item: { label: string; hasDropdown: boolean },
    index: number
  ) => (
    <div key={index}>
      {item.hasDropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 items-center text-gray-700 hover:text-gray-900 transition-colors py-2">
            <span className="font-semibold">{item.label}</span>
            <SVGIcon icon="chevron" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button className="text-gray-700 hover:text-gray-900 transition-colors py-2">
          {item.label}
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-white border-gray-200 py-3 px-4">
      <div className="flex flex-wrap justify-between items-center m-auto max-w-7xl">
        <nav className="flex flex-wrap items-center space-x-4">
          {leftNavItems.map(renderNavItem)}
        </nav>
        <nav className="flex flex-wrap items-center space-x-4">
          {rightNavItems.map(renderNavItem)}
          <span className="bg-gray-100 h-[20px] w-[1px]" />
          <SVGIcon icon="menu" />
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
