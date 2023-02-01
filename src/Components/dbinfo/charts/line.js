import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const LineDisplay = ({ columns, data }) => {
  return (
    <LineChart
      width={1850}
      height={750}
      data={data}
      margin={{
        top: 5,
        right: 50,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='value' />
      <YAxis datakey='prct' />
      <Tooltip />
      <Legend />
      <Line dataKey='prct' fill='#82ca9d' />
    </LineChart>
  )
}

export default LineDisplay
