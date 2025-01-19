import Image from "next/image";

export default function Card() {
  return (
    <div className="p-10 m-2 w-96 rounded-xl border-solid border-gray-200 border bg-white shadow-2xl">
      <div>
        <Image
          src="/images/wahyu_logo.png"
          alt="Wahyu Jaya Frame Logo"
          width={110}
          height={100}
          className="mb-14"
        />
        <p className="text-gray-300 text-sm mb-4">Welcome Back!!!</p>
        <p className="mb-5 text-3xl font-medium">Sign In</p>
      </div>
      <form>
        <p className="mb-2 text-sm">Email</p>
        <input className="px-2 py-1 mb-3 min-w-full rounded-md bg-inputBg"></input>
        <div className="flex flex-row justify-between items-center">
          <p className="mb-2 text-sm">Password</p>
          <p className="mb-2 text-sm text-gray-400">Forgot Password?</p>
        </div>
        <input className="px-2 py-1 mb-3 min-w-full rounded-md bg-inputBg"></input>
        <div className="flex justify-center mt-4">
          <button className="bg-orangeMain py-3 px-10 rounded-3xl text-white text-sm ">
            SIGN IN
          </button>
        </div>
      </form>
      <div>
        <p className="flex justify-center mt-4 text-gray-400">
          Don&apos;t have an account? Sign Up
        </p>
      </div>
    </div>
  );
}
