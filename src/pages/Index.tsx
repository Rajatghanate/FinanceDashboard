import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Wifi,
  DollarSign,
  ShoppingBag,
  Home,
  MoreHorizontal,
  Zap,
  Layers,
  Check,
  PieChart,
  ChevronDown
} from "lucide-react";
import { ApiQueueDemo } from "@/components/ApiQueueDemo";
import { TotalExpensesCard } from "@/components/TotalExpensesCard";
import { ExchangeCard } from "@/components/ExchangeCard";
import { SubscriptionsCard } from "@/components/SubscriptionsCard";
import { CreditScoreCard } from "@/components/CreditScoreCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.classList.add("animate-highlight");
        setTimeout(() => {
          element.classList.remove("animate-highlight");
        }, 1000);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        <main className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[2000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4">
            <div className="flex flex-col gap-4">
              <div id="my-cards">
                <Card className="p-4 sm:p-5 md:p-6 bg-card">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-card-foreground" />
                      <h3 className="text-lg font-semibold text-card-foreground">My Cards</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Plus className="h-4 w-4" />
                      Add Card
                    </Button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm mb-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm">
                          <Layers className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Wifi className="h-4 w-4 text-gray-400 rotate-90" />
                          <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg flex items-center gap-1.5 hover:bg-gray-50">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center relative">
                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                        <div className="w-8 h-8 rounded-full bg-amber-500 -ml-3"></div>
                      </div>
                    </div>

                    <div className="mb-0">
                      <div className="text-sm text-gray-500 mb-1">Savings Card</div>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold text-gray-900">$16,058.94</div>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <span className="text-lg text-gray-600">‹</span>
                          </button>
                          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <span className="text-lg text-gray-600">›</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 rounded-xl bg-gray-50 border border-gray-200">
                    <button className="flex-1 py-2.5 text-sm font-medium text-center text-gray-500 hover:bg-gray-100 transition-colors rounded-l-xl">
                      Daily
                    </button>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <button className="flex-1 py-2.5 text-sm font-medium text-center text-gray-500 hover:bg-gray-100 transition-colors">
                      Weekly
                    </button>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <button className="flex-1 py-2.5 text-sm font-medium text-center bg-white text-gray-900 hover:bg-gray-50 transition-colors rounded-r-xl shadow-sm">
                      Monthly
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="4"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="4"
                            strokeDasharray="126"
                            strokeDashoffset="31.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Spending Limit</div>
                        <div className="text-lg font-semibold text-gray-900">$1,500.00 <span className="text-xs text-gray-500 font-normal">/week</span></div>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <span className="text-lg text-gray-600">›</span>
                    </button>
                  </div>
                </Card>
              </div>

              <div id="transactions" className="flex-1 flex flex-col">
                <Card className="p-4 sm:p-5 md:p-6 flex-1">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-muted flex items-center justify-center">
                        <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-card-foreground" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-card-foreground">Recent Transactions</h3>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      See All
                    </button>
                  </div>

                  <div className="flex gap-2 mb-3 sm:mb-4 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-card-foreground text-background whitespace-nowrap">
                      Incoming
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted whitespace-nowrap transition-colors">
                      Outgoing
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted whitespace-nowrap transition-colors">
                      Pending
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: "Salary Deposit", amount: "$3,500.00", date: "Sep 18", description: "Monthly salary from Apex...", bgColor: "bg-gray-100 dark:bg-gray-800", iconColor: "text-gray-600 dark:text-gray-400", icon: "🏛️" },
                      { name: "Stock Dividend", amount: "$846.14", date: "Sep 18", description: "Payment from stock investm...", bgColor: "bg-gray-100 dark:bg-gray-800", iconColor: "text-gray-600 dark:text-gray-400", icon: "📈" },
                      { name: "Rental Income", amount: "$100.00", date: "Sep 17", description: "Rental payment from Mr. Du...", bgColor: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-600 dark:text-green-400", icon: "🏠" },
                      { name: "Refund from Amazon", amount: "$36.24", date: "Sep 15", description: "Refund of Order No #124235", bgColor: "bg-gray-100 dark:bg-gray-800", iconColor: "text-gray-600 dark:text-gray-400", icon: "📦" },

                    ].map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between py-2 sm:py-2.5 hover:bg-muted/30 transition-colors rounded-lg px-1 sm:px-2 -mx-1 sm:-mx-2 cursor-pointer group">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${transaction.bgColor}`}>
                            <span className="text-lg sm:text-xl">{transaction.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-semibold text-card-foreground truncate">{transaction.name}</div>
                            <div className="text-[10px] sm:text-xs text-muted-foreground truncate hidden sm:block">{transaction.description}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                          <div className="text-right">
                            <div className="text-xs sm:text-base font-semibold text-card-foreground whitespace-nowrap">
                              {transaction.amount}
                            </div>
                            <div className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{transaction.date}</div>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-card-foreground transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div id="spending">
                <Card className="p-4 sm:p-5 md:p-6 h-fit">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-card-foreground" />
                      <h3 className="text-lg font-semibold text-card-foreground">Spending Summary</h3>
                    </div>
                    <button className="px-3 py-1.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1">
                      Last Week
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="flex items-end justify-center mb-6">
                    <div className="relative w-64 h-32">
                      <svg className="w-full h-full" viewBox="0 0 200 100">
                        {/* Blue section - Left Quadrant */}
                        <path
                          d="M 20 95 A 80 80 0 0 1 98.6 15"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="20"
                          strokeLinecap="butt"
                        />

                        {/* Cyan section - Top Right */}
                        <path
                          d="M 101.4 15 A 80 80 0 0 1 167.8 52.6"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="20"
                          strokeLinecap="butt"
                        />

                        {/* Light gray section - Bottom Right tail */}
                        <path
                          d="M 169.3 55 A 80 80 0 0 1 180 95"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="20"
                          strokeLinecap="butt"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                        <div className="text-xs text-muted-foreground mb-0.5 tracking-wider">SPEND</div>
                        <div className="text-3xl font-bold text-card-foreground">$1,800.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-card-foreground">Shopping</div>
                      <div className="text-sm text-muted-foreground">$900.00</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-2">
                        <DollarSign className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div className="text-sm font-medium text-card-foreground">Utilities</div>
                      <div className="text-sm text-muted-foreground">$600.00</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2">
                        <Home className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="text-sm font-medium text-card-foreground">Others</div>
                      <div className="text-sm text-muted-foreground">$200.00</div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-primary/5 text-center">
                    <div className="text-sm text-muted-foreground">Your weekly spending limit is $2000.</div>
                  </div>
                </Card>
              </div>

              <SubscriptionsCard className="flex-1" />
            </div>

            <div className="flex flex-col gap-4">
              <TotalExpensesCard />
              <div id="exchange">
                <ExchangeCard />
              </div>
              <CreditScoreCard className="flex-1" />
            </div>
          </div >

          <ApiQueueDemo />
        </main >
      </div >
    </div >
  );
};

export default Index;
