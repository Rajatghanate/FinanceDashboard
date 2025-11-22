import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

export function TotalExpensesCard() {
  return (
    <Card className="p-5 relative">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <button className="mb-3 p-1 hover:bg-muted rounded-md transition-colors">
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Expenses</p>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-card-foreground">
                $6,240.28
              </h2>
              <span className="px-2 py-0.5 text-xs font-medium text-red-600 bg-red-50 rounded">
                -2%
              </span>
            </div>
          </div>
        </div>

        <div className="w-32 h-16 ml-4">
          <svg className="w-full h-full" viewBox="0 0 120 60" preserveAspectRatio="none">
            <path
              d="M0,35 Q15,25 25,30 T45,28 Q55,20 65,15 T85,25 Q95,30 105,20 T120,30"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
}