import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="poppins w-10/12 poppins fixed right-0 bg-gray-950 flex p-8 h-screen flex-col items-center justify-center gap-12 ">
      <h1 className="w-full text-center text-2xl font-semibold text-white">
        Welcome to <span className="text-lime-300">The Software Academy </span>
        Teachers Management Platform
      </h1>
      <form className="bg-white/10 flex flex-col gap-8 p-8 rounded-md w-5/12 mx-auto">
        <p className="text-center text-lg font-semibold text-white/80">
          Sign in to your Teacher Account
        </p>
        <div className="flex flex-col gap-8 items-center w-9/12 mx-auto">
          <input
            type="email"
            className="bg-transparent border-b-2 border-white/20 focus:outline-none px-2 pb-1 text-white/80"
            placeholder="Your Email"
          ></input>
          <input
            type="password"
            className="bg-transparent border-b-2 border-white/20 focus:outline-none px-2 pb-1 text-white/80"
            placeholder="Your Password"
          ></input>
          <Link
            href="/overview"
            className="px-12 py-2 text-black rounded-full bg-lime-300 font-semibold"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
