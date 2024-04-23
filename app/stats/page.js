"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";

const Stats = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "earnings (USD)",
      },
    ],
    width: 400,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const settings = {
    width: 100,
    height: 100,
    value: 60,
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Fev",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
  ];
  const valueFormatter = (value) => `$${value}`;

  return (
    <div className="poppins w-10/12 fixed right-0 bg-gray-100 p-8 h-screen flex flex-col justify-between">
      <h1 className="text-2xl text-gray-950 poppins font-semibold">
        Statistics
      </h1>
      <div className="w-full gap-12 justify-between grid grid-cols-2">
        <div className="p-8 slide-left bg-white shadow-md rounded-md flex items-center justify-center">
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "london", label: "Python Basic", valueFormatter },
              { dataKey: "paris", label: "Python Advanced", valueFormatter },
              {
                dataKey: "seoul",
                label: "Machine Learning for Beginners",
                valueFormatter,
              },
            ]}
            {...chartSetting}
          />
        </div>
        <div className="p-8 slide-right bg-white shadow-md rounded-md flex items-center justify-center">
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "london", label: "Python Basic", valueFormatter },
              { dataKey: "paris", label: "Python Advanced", valueFormatter },
              {
                dataKey: "seoul",
                label: "Machine Learning for Beginners",
                valueFormatter,
              },
            ]}
            {...chartSetting}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-12 gap-8">
        <div className="rounded-md slide-in  bg-white shadow-md flex items-center justify-center">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>

        <div className="rounded-md slide-in flex-col bg-white shadow-md flex items-center">
          <h3 className="mt-8">New Students this month</h3>
          <Gauge
            {...settings}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 20,
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "##a855f7",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.text.disabled,
              },
            })}
          />
        </div>
        <div className="rounded-md slide-in  bg-white shadow-md flex items-center justify-center">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
        </div>
        <div className="rounded-md slide-in flex-col bg-white shadow-md flex items-center justify-center">
          <h3 className="mt-8">Students Engaged</h3>

          <Gauge
            {...settings}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 20,
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#bef264",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.text.disabled,
              },
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
