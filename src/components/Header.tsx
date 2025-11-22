import { Search, Bell, ArrowUpRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent } from "./Sidebar";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-20 bg-card sticky top-0 z-10">
      <div className="h-full px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <SidebarContent onItemClick={() => setOpen(false)} />
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden border-2 border-white shadow-sm">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur"
                alt="Arthur Taylor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground leading-none mb-1">Arthur Taylor</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Welcome back to Apex <span className="text-base">👋</span>
              </p>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-foreground lg:hidden">
            Apex
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </Button>

          <Button className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white ml-2">
            Move Money
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}