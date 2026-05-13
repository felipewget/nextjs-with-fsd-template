"use client";

/**
 * Sample:
 * const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  ]
   <ChartBarMultiple
      data={chartData}
      dataKey="month"
      barKeys={["desktop", "mobile"]}
    />
 */

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/shared/ui/chart";

interface ChartBarMultipleProps<TData extends Record<string, unknown>> {
  data: TData[];
  dataKey: keyof TData & string;
  barKeys: (keyof TData & string)[];
}

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export function ChartBarMultiple<TData extends Record<string, unknown>>({
  data,
  dataKey,
  barKeys,
}: ChartBarMultipleProps<TData>) {
  const chartConfig = Object.fromEntries(
    barKeys.map((key, i) => [
      key,
      {
        label: key.charAt(0).toUpperCase() + key.slice(1),
        color: CHART_COLORS[i % CHART_COLORS.length],
      },
    ]),
  ) satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={dataKey as string}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        {barKeys.map((key) => (
          <Bar
            key={key}
            dataKey={key as string}
            fill={`var(--color-${key as string})`}
            radius={4}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}
