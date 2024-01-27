import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    {
      "name": "Recruiters",
      "value": 500
    },
    {
      "name": "Incognito",
      "value": 300
    },
    {
      "name": "Users",
      "value": 200
    },
 
  ]

  

const ViewersChart = () => {

const COLORS = ['#A6B7D4', '#FF92AE', '#4C6FFF'];

  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 text-sm">
        <ResponsiveContainer width={100} height={100} >
            <PieChart width={0} height={0}>
                <Pie data={data} dataKey="value" cx={"50%"} innerRadius={40} outerRadius={50} fill='#3B82F6' paddingAngle={0}>
                    {data.map((entery, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ViewersChart