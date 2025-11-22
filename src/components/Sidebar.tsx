import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  ArrowLeftRight,
  Receipt,
  Wallet,
  RefreshCw,
  Settings,
  HelpCircle,
  Zap,
  ChevronRight,
  ChevronsUpDown,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, section: "main" },
  { name: "My Cards", targetId: "my-cards", icon: CreditCard, section: "main" },
  { name: "Transfer", targetId: "exchange", icon: ArrowLeftRight, section: "main" },
  { name: "Transactions", targetId: "transactions", icon: Receipt, section: "main" },
  { name: "Payments", targetId: "spending", icon: Wallet, section: "main" },
  { name: "Exchange", targetId: "exchange", icon: RefreshCw, section: "main" },
  { name: "Settings", href: "/settings", icon: Settings, section: "other" },
  { name: "Support", href: "/support", icon: HelpCircle, section: "other" },
];

export function SidebarContent({ onItemClick }: { onItemClick?: () => void }) {
  const navigate = useNavigate();

  const handleNavigation = (item: any) => {
    if (item.targetId) {
      navigate("/", { state: { scrollTo: item.targetId, timestamp: Date.now() } });
      if (onItemClick) onItemClick();
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full overflow-y-auto bg-sidebar">
      {/* Header Section */}
      <div className="flex items-center h-20 flex-shrink-0 px-6">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Layers className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-bold text-gray-900 leading-none">Apex</h2>
            <p className="text-xs text-gray-500 mt-1 font-medium">Finance & Banking</p>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg border border-gray-200">
            <ChevronsUpDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Divider Line with Margins */}
      <div className="px-6 mb-2">
        <div className="h-px bg-gray-200 w-full" />
      </div>

      <nav className="flex-1 px-4 py-4 space-y-8">
        <div>
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Main
          </h3>
          <div className="space-y-1">
            {navigation.filter(item => item.section === "main").map((item) => (
              item.href ? (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={onItemClick}
                  className={({ isActive }) =>
                    cn(
                      "relative flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors group ml-4",
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full" />
                      )}
                      <item.icon className={cn("mr-3 h-5 w-5 flex-shrink-0", isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600")} />
                      {item.name}
                      {isActive && <ChevronRight className="ml-auto h-4 w-4 text-gray-900" />}
                    </>
                  )}
                </NavLink>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="w-full relative flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-gray-600 hover:bg-gray-50 hover:text-blue-600 text-left group ml-4"
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-blue-600" />
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Others
          </h3>
          <div className="space-y-1">
            {navigation.filter(item => item.section === "other").map((item) => (
              <NavLink
                key={item.name}
                to={item.href!}
                onClick={onItemClick}
                className={({ isActive }) =>
                  cn(
                    "relative flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors group ml-4",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full" />
                    )}
                    <item.icon className={cn("mr-3 h-5 w-5 flex-shrink-0", isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600")} />
                    {item.name}
                    {isActive && <ChevronRight className="ml-auto h-4 w-4 text-gray-900" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex-shrink-0 p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">AT</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Arthur Taylor</p>
            <p className="text-xs text-muted-foreground truncate">arthur@apex.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 border-r border-border bg-sidebar">
      <SidebarContent />
    </div>
  );
}