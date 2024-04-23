import Link from "next/link";
const Courses = () => {
  return (
    <div className="poppins w-10/12 fixed right-0 bg-gray-100 p-8 h-screen flex flex-col justify-between ">
      <h1 className="text-2xl text-gray-950 poppins font-semibold">
        My Courses
      </h1>
      {/* COURSES GRID */}
      <div className=" grid grid-cols-5 gap-8 w-full justify-between">
        {/* course object */}
        <div className="slide-left bg-gray-800 rounded-sm p-4 flex flex-col gap-4 ">
          {/* image to be put */}
          <div className="h-32 bg-white rounded-md flex items-center justify-center">
            **
          </div>
          <h3 className="font-semibold text-md text-center text-white">
            Machine Learning For Beginners
          </h3>
          <div className="pt-1 border-t-2 border-white/10 mb-2"></div>
          <p className="text-sm text-white">3456 enrolled</p>
        </div>
        <div className="slide-left bg-gray-800 rounded-sm p-4 flex flex-col gap-4">
          {/* image to be put */}
          <div className="h-32 bg-white rounded-md flex items-center justify-center">
            **
          </div>
          <h3 className="font-semibold text-md text-center text-white">
            Python Advanced
          </h3>
          <div className="pt-1 border-t-2 border-white/10 mb-2"></div>
          <p className="text-sm text-white">234 enrolled</p>
        </div>
        <div className="slide-left bg-gray-800 rounded-sm p-4 flex flex-col gap-4 ">
          {/* image to be put */}
          <div className="h-32 bg-white rounded-md flex items-center justify-center">
            **
          </div>
          <h3 className="font-semibold text-md text-center text-white">
            Python Basic
          </h3>
          <div className="pt-1 border-t-2 border-white/10 mb-2"></div>
          <p className="text-sm text-white">98765 enrolled</p>
        </div>
      </div>
      {/* CREATE GRID */}
      <div className=" w-full slide-in bg-white shadow-md p-8">
        <p className="text-xl w-full text-center font-semibold">
          Creation Centre
        </p>
        <div className="grid mt-8 grid-cols-3 gap-8">
          <Link
            href="/"
            className="border-2  rounded-md flex items-center justify-center p-8 flex-col gap-4 hover:shadow-md ease-in-out transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add Course
          </Link>
          <Link
            href="/"
            className="border-2  rounded-md flex items-center justify-center p-8 flex-col gap-4 hover:shadow-md ease-in-out transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Edit Course
          </Link>
          <Link
            href="/"
            className="border-2  rounded-md flex items-center justify-center p-8 flex-col gap-4 hover:shadow-md ease-in-out transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
            Continue Draft
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
