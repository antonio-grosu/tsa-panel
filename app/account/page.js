import Link from "next/link";
const Account = () => {
  return (
    <div className="poppins w-10/12 fixed right-0 bg-gray-100 p-8 h-screen flex flex-col justify-between ">
      <h1 className="text-2xl text-gray-950 poppins font-semibold">Account</h1>
      {/* information grid  */}
      <div className="grid grid-cols-2 mt-24 gap-8">
        <div className="slide-left bg-white shadow-md p-8 rounded-md">
          <p className="text-xl text-center font-semibold">
            General Information
          </p>
          <div className="mt-6 flex justify-center w-full">
            <div className="text-black/50 flex flex-col items-end gap-2 mr-2 w-full">
              <p>Full Name</p>
              <p>Country</p>
              <p>Email</p>
              <p>Date Of Birth</p>
              <p>Gender</p>
              <p>Language Preference</p>
              <p>Time Zone</p>
              <p>Last Login</p>
            </div>
            <div className=" flex flex-col items-start gap-2 ml-2 w-full">
              <p>Grosu Antonio</p>
              <p>Romania</p>
              <p>antonio.grosu@codevs.ro</p>
              <p>19/06/2005</p>
              <p>Male</p>
              <p>English</p>
              <p>UTC +2</p>
              <p>20/04/2024</p>
            </div>
          </div>
        </div>
        <div className="slide-right  bg-white shadow-md rounded-md p-8">
          <p className="text-xl text-center font-semibold">
            Billing Information
          </p>
          <div className="mt-6 flex justify-center w-full">
            <div className="text-black/50 flex flex-col items-end gap-2 mr-2 w-full">
              <p>Billing Name</p>
              <p>Billing Address</p>
              <p>Billing Email</p>
              <p>Payment Method</p>
              <p>Billing Currency</p>
            </div>
            <div className=" flex flex-col items-start gap-2 ml-2 w-full">
              <p>Grosu Antonio</p>
              <p>Bd. 1 Decembrie 1918</p>
              <p>antonio.grosu@codevs.ro</p>
              <p>Visa Card</p>
              <p>Ron</p>
            </div>
          </div>
        </div>
      </div>
      {/* account centre */}
      <div className="w-full slide-in rounded-md p-8 bg-white shadow-md mt-12">
        <p className="text-xl text-center font-semibold"> Centre</p>
        <div className="mt-8 grid grid-cols-3 w-5/12 mx-auto gap-8">
          <Link
            href="/"
            className="bg-gray-400/10 p-8 flex text-center text-sm hover:underline hover:shadow-md transition-all hover:bg-gray-100 ease-in-out  items-center justify-center"
          >
            Forgot Password
          </Link>
          <Link
            href="/"
            className="flex p-8 bg-gray-400/10 text-center text-sm hover:underline hover:shadow-md transition-all hover:bg-gray-100 ease-in-out  items-center justify-center"
          >
            Change Email
          </Link>
          <Link
            href="/"
            className="flex p-8 bg-red-400/10  border-2 border-red-500 text-center text-sm hover:underline hover:shadow-md transition-all hover:bg-gray-100 ease-in-out items-center justify-center"
          >
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
