import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const AreaDisplay = ({ columns, data }) => {
  return (
    <AreaChart
      width={1850}
      height={750}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='value' />
      <YAxis dataKey='prct' />
      <Tooltip />
      <Area type='monotone' dataKey='prct' stroke='#8884d8' />
    </AreaChart>
  )
}

export default AreaDisplay
