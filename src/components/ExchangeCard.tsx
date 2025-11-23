import { Card } from "@/components/ui/card";
import { RefreshCw, ChevronDown, ArrowRightLeft } from "lucide-react";

export function ExchangeCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Exchange
        </h3>
        <button className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-white border border-border rounded-lg hover:bg-muted transition-colors">
          Currencies
        </button>
      </div>

      <div className="space-y-6">
        <div className="border border-border rounded-2xl overflow-hidden bg-card">
          {/* Currency Selectors */}
          <div className="flex items-center justify-between border-b border-border p-3 bg-white">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 px-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="US Flag"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-sm text-card-foreground">USD</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>

            <ArrowRightLeft className="h-4 w-4 text-muted-foreground/60" />

            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 px-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src="https://flagcdn.com/w40/eu.png"
                  alt="EU Flag"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-sm text-card-foreground">EUR</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>

          {/* Amount Display */}
          <div className="py-6 text-center bg-white">
            <div className="text-3xl font-bold text-card-foreground mb-1">$100.00</div>
            <div className="text-xs text-muted-foreground">
              Available : <span className="text-foreground font-semibold">$16,058.94</span>
            </div>
          </div>

          {/* Exchange Rate */}
          <div className="bg-gray-50/80 p-2.5 text-center text-xs font-medium text-muted-foreground border-t border-border">
            1 USD = 0.94 EUR
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-2.5 px-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Tax (2%)</span>
            <span className="text-card-foreground font-medium">$2.00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Exchange fee (1%)</span>
            <span className="text-card-foreground font-medium">$1.00</span>
          </div>
          <div className="flex justify-between text-xs font-semibold pt-2">
            <span className="text-card-foreground">Total amount</span>
            <span className="text-card-foreground">€90.7</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-border hover:bg-gray-50 transition-colors font-medium text-sm text-card-foreground shadow-sm">
          <RefreshCw className="h-4 w-4 text-muted-foreground" />
          Exchange
        </button>
      </div>
    </Card>
  );
}