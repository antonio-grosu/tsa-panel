import Image from "next/image";

const Overview = () => {
  return (
    <div className="w-10/12 fixed right-0 bg-gray-100 p-8 h-screen flex flex-col justify-between">
      <h1 className="text-2xl text-gray-950 poppins font-semibold">Overview</h1>

      {/* Overview content */}

      <div className="w-full bg-blue-100/50 p-8 rounded-md border-blue-500 border-2 h-96 flex items-center justify-center">
        Progress Graph{" "}
      </div>

      {/* other vague stats  */}
      <div className="grid grid-cols-5 gap-8 items-center justify-between">
        <div className="bg-white shadow-md text-center p-8 rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            $245.7
          </p>{" "}
          <p className="text-sm">April Earnings</p>
        </div>

        <div className="bg-white shadow-md text-center p-8 rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">78%</p>{" "}
          <p className="text-sm">Course Completion</p>
        </div>

        <div className="bg-white shadow-md text-center p-8    rounded-md  ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            3.75 Stars
          </p>{" "}
          <p className="text-sm">Overall Rating</p>
        </div>
        <div className="bg-white shadow-md text-center p-8    rounded-md ">
          {" "}
          <p className="text-lg block text-green-500 font-semibold">
            No. #678
          </p>{" "}
          <p className="text-sm">In Teachers Ranking</p>
        </div>
        <div className="bg-white shadow-md text-center p-8  rounded-md  ">
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
