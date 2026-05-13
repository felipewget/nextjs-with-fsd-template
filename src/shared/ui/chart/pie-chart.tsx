"use client"

/**
 * Sample:
 * const pieData = [
  { browser: "Chrome", visitors: 275 },
  { browser: "Safari", visitors: 200 },
  { browser: "Firefox", visitors: 187 },
  { browser: "Edge", visitors: 173 },
  { browser: "Other", visitors: 90 },
  ]
   <PieChart
      data={pieData}
      dataKey="browser"
      valueKey="visitors"
    />
 */

import { Cell, Pie, PieChart as RechartsPieChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/shared/ui/chart"

interface PieChartProps<TData extends Record<string, unknown>> {
  data: TData[]
  dataKey: keyof TData & string
  valueKey: keyof TData & string
}

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export function PieChart<TData extends Record<string, unknown>>({
  data,
  dataKey,
  valueKey,
}: PieChartProps<TData>) {
  const chartConfig = Object.fromEntries(
    data.map((item, i) => {
      const key = String(item[dataKey])
      return [
        key,
        {
          label: key.charAt(0).toUpperCase() + key.slice(1),
          color: CHART_COLORS[i % CHART_COLORS.length],
        },
      ]
    })
  ) satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="aspect-square">
      <RechartsPieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={data}
          dataKey={valueKey as string}
          nameKey={dataKey as string}
          innerRadius={60}
          strokeWidth={2}
        >
          {data.map((item, i) => (
            <Cell
              key={String(item[dataKey])}
              fill={CHART_COLORS[i % CHART_COLORS.length]}
            />
          ))}
        </Pie>
      </RechartsPieChart>
    </ChartContainer>
  )
}
