"use client";

import Image from "next/image";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const Overview = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "earnings (USD)",
      },
    ],
    width: 1000,
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
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
    <div className="w-10/12 fixed right-0 bg-gray-100 p-8 h-screen flex flex-col justify-between">
      <h1 className="text-2xl text-gray-950 poppins font-semibold">Overview</h1>

      {/* Overview content */}

      <div className="w-full flex items-center">
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

      {/* other vague stats  */}
      <div className="grid grid-cols-5 gap-8 items-center justify-between">
        <div className="slide-in bg-white shadow-md text-center p-8 rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            $183
          </p>{" "}
          <p className="text-sm">April Earnings</p>
        </div>

        <div className="slide-in bg-white shadow-md text-center p-8 rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">78%</p>{" "}
          <p className="text-sm">Course Completion</p>
        </div>

        <div className="slide-in bg-white shadow-md text-center p-8    rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            3.75 Stars
          </p>{" "}
          <p className="text-sm">Overall Rating</p>
        </div>
        <div className="slide-in bg-white shadow-md text-center p-8    rounded-md ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            No. #678
          </p>{" "}
          <p className="text-sm">In Teachers Ranking</p>
        </div>
        <div className="slide-in bg-white shadow-md text-center p-8  rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            +200
          </p>{" "}
          <p className="text-sm">Students this month</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
