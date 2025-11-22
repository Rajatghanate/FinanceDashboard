import React from 'react';
import { Music, Play, Video, MoreVertical, FileText } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface SubscriptionsCardProps {
  className?: string;
}

export function SubscriptionsCard({ className }: SubscriptionsCardProps) {
  return (
    <Card className={`p-5 rounded-3xl bg-white ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">My Subscriptions</h3>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          See All
        </button>
      </div>

      <div className="relative p-6 rounded-2xl bg-[#F8FAFC] overflow-hidden mb-6">

        <div className="absolute top-0 right-0 h-full w-[140px] pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute right-0 top-0"
          >
            <defs>
              <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>

            <circle
              cx="90"
              cy="30"
              r="45"
              fill="none"
              stroke="url(#cornerGradient)"
              strokeWidth="2.5"
            />

            <path
              d="M80 20 V 55 C 80 62 74 64 70 64 S 62 62 62 56 S 66 48 72 48 C 73 48 74 48.2 75 48.5 V 20 L 80 20 Z"
              fill="url(#cornerGradient)"
              transform="translate(-5, -25) scale(1.2)"
            />
          </svg>
        </div>

        <div className="relative z-10 pr-10">

          <div className="relative w-10 h-10 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-pink-400 to-blue-500 p-[1.5px]">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Music className="w-5 h-5 text-blue-500" style={{ stroke: 'url(#cornerGradient)' }} />
              </div>
            </div>
          </div>

          <div className="text-[17px] font-bold text-gray-900 mb-1 leading-tight">
            50% discount on Apple Music
          </div>
          <div className="text-[13px] text-gray-500 font-medium">
            For only $4.99 per month!{' '}
            <a href="#" className="text-gray-500 underline decoration-gray-400 hover:text-gray-800 ml-1">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-1">

        <div className="py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-sm">
              <Music className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Salary Deposit</div>
              <div className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold text-gray-900">$7.99</span> /month
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[11px] font-semibold text-green-700 bg-green-50 rounded-full border border-green-100">
              Paid
            </span>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-sm">
              <Play className="h-5 w-5 text-white fill-current" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Youtube Music</div>
              <div className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold text-gray-900">$79.99</span> /year
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[11px] font-semibold text-gray-600 bg-gray-50 rounded-full border border-gray-200">
              Expiring
            </span>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-sm">
              <Video className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Prime Video</div>
              <div className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold text-gray-900">$9.99</span> /month
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[11px] font-semibold text-orange-700 bg-orange-50 rounded-full border border-orange-100">
              Paused
            </span>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </Card>
  );
}