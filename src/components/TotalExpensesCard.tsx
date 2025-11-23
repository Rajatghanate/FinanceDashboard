import { Card } from "@/components/ui/card";
import { ArrowDownRight } from "lucide-react";

export function TotalExpensesCard() {
  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-between h-full z-10">
          <div className="mb-6">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
              <ArrowDownRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Total Expenses</p>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-card-foreground">
                $6,240.28
              </h2>
              <span className="px-2 py-0.5 text-xs font-bold text-red-600 bg-red-50 rounded-md">
                -2%
              </span>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-24 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 120 60" preserveAspectRatio="none">
            <path
              d="M0,40 Q20,35 30,25 T50,30 Q65,45 80,20 T100,10 T120,15"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
}