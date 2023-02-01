import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const BarDisplay = ({ columns, data }) => {
  return (
    <BarChart
      width={1600}
      height={750}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='value' />
      <YAxis dataKey='prct' />
      <Tooltip />
      <Legend />
      <Bar dataKey='prct' fill='#82ca9d' />
    </BarChart>
  )
}

export default BarDisplay
