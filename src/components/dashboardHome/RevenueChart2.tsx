"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with a legend";

const chartData = [
  { month: "January", subscriptions: 186, ads: 80 },
  { month: "February", subscriptions: 305, ads: 200 },
  { month: "March", subscriptions: 237, ads: 120 },
  { month: "April", subscriptions: 73, ads: 190 },
  { month: "May", subscriptions: 209, ads: 130 },
  { month: "June", subscriptions: 214, ads: 140 },
];

const chartConfig = {
  subscriptions: {
    label: "Subscriptions",
    color: "var(--chart-1)",
  },
  ads: {
    label: "Ads",
    color: "var(--chart-2)",
  },
  tasks: {
    label: "Tasks",
    color: "var(--chart-3)",
  },
  wallet: {
    label: "Wallet",
    color: "var(--chart-4)",
  },
  purchases: {
    label: "Purchases",
    color: "var(--chart-5)",
  },
  sent: {
    label: "Sent",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function ChartAreaLegend() {
  return (
    <Card className="shadow-none w-full">
      <CardHeader className="flex justify-between ">
        <CardTitle className="font-bold text-primary text-[1.6rem]">
          Revenue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 5,
              right: 5,
            }}
          >
            <ChartLegend
              content={
                <ChartLegendContent className="text-primary"/>
              }
            />
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <defs>
              <linearGradient
                id="fillSubscriptions"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAds" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTasks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillWallet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-4)" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="var(--chart-4)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillPurchases" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-5)" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="var(--chart-5)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-6)" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="var(--chart-6)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="subscriptions"
              type="natural"
              fill="url(#fillSubscriptions)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
              stackId="a"
            />
            <Area
              dataKey="ads"
              type="natural"
              fill="url(#fillAds)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
              stackId="a"
            />
            <Area
              dataKey="tasks"
              type="natural"
              fill="url(#fillTasks)"
              fillOpacity={0.4}
              stroke="var(--chart-3)"
              stackId="a"
            />
            <Area
              dataKey="wallet"
              type="natural"
              fill="url(#fillWallet)"
              fillOpacity={0.4}
              stroke="var(--chart-4)"
              stackId="a"
            />
            <Area
              dataKey="purchases"
              type="natural"
              fill="url(#fillPurchases)"
              fillOpacity={0.4}
              stroke="var(--chart-5)"
              stackId="a"
            />
            <Area
              dataKey="sent"
              type="natural"
              fill="url(#fillSent)"
              fillOpacity={0.4}
              stroke="var(--chart-6)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
