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
  { month: "January", paid: 186, withdraw: 80 },
  { month: "February", paid: 305, withdraw: 200 },
  { month: "March", paid: 237, withdraw: 120 },
  { month: "April", paid: 73, withdraw: 190 },
  { month: "May", paid: 209, withdraw: 130 },
  { month: "June", paid: 214, withdraw: 140 },
];

const chartConfig = {
  paid: {
    label: "Paid",
    color: "var(--chart-1)",
  },
  withdraw: {
    label: "Withdraw",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function TransactionChartCard() {
  return (
    <Card className="shadow-none rounded-[0.5rem] w-full">
      <CardHeader className="flex justify-between ">
        <CardTitle className="font-bold text-primary text-[1.6rem]">
          Regular User
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
              content={<ChartLegendContent className="text-primary" />}
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
              <linearGradient id="fillPaid" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillWithdraw" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="paid"
              type="natural"
              fill="url(#fillPaid)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
              stackId="a"
            />
            <Area
              dataKey="withdraw"
              type="natural"
              fill="url(#fillWithdraw)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TransactionChartCard;
