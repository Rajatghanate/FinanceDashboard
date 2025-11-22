import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChevronDown, ArrowRightLeft } from "lucide-react";

export function ExchangeCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Exchange
        </h3>
        <button className="px-3 py-1.5 text-xs font-medium bg-card border border-border rounded-lg hover:bg-muted transition-colors">
          Currencies
        </button>
      </div>

      <div className="space-y-6">
        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="US Flag"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-sm text-card-foreground">USD</span>
              <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown className="h-3 w-3 text-gray-600" />
              </div>
            </div>

            <div className="h-5 w-px bg-border mx-2"></div>

            <ArrowRightLeft className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />

            <div className="h-5 w-px bg-border mx-2"></div>

            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src="https://flagcdn.com/w40/eu.png"
                  alt="EU Flag"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-sm text-card-foreground">EUR</span>
              <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown className="h-3 w-3 text-gray-600" />
              </div>
            </div>
          </div>

          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-card-foreground mb-2">$100.00</div>
            <div className="text-xs text-muted-foreground">
              Available : <span className="text-foreground font-medium">$16,058.94</span>
            </div>
          </div>

          <div className="bg-muted/30 p-3 text-center text-xs font-medium text-card-foreground border-t border-border">
            1 USD = 0.94 EUR
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Tax (2%)</span>
            <span className="text-card-foreground font-medium">$2.00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Exchange fee (1%)</span>
            <span className="text-card-foreground font-medium">$1.00</span>
          </div>
          <div className="flex justify-between text-xs font-semibold pt-3 border-t border-border">
            <span className="text-card-foreground">Total amount</span>
            <span className="text-card-foreground">€90.7</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors font-medium text-sm text-card-foreground">
          <RefreshCw className="h-3.5 w-3.5" />
          Exchange
        </button>
      </div>
    </Card>
  );
}
