import { Card } from "@/components/ui/card";
import { Gauge } from "lucide-react";

interface CreditScoreCardProps {
  className?: string;
}

export function CreditScoreCard({ className }: CreditScoreCardProps) {
  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Gauge className="h-5 w-5" />
          Credit Score
        </h3>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          Details
        </button>
      </div>

      <div className="border-b border-border mb-4"></div>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-muted-foreground mb-2">
              Your credit score is <span className="font-semibold text-card-foreground">710</span>
            </div>
            <div className="text-xs text-muted-foreground">
              This score is considered to be Excellent.
            </div>
          </div>
          <span className="text-2xl bg-amber-100 dark:bg-amber-900/30 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">😎</span>
        </div>

        <div className="space-y-3">
          <div className="flex gap-1 h-8">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i < 35
                  ? "bg-success"
                  : "bg-muted"
                  }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>300</span>
            <span>850</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
