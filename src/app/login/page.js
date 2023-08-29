export default function Login() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div>
        <h1 className="text-2xl font-semibold text-center">
          Login to your account
        </h1>
        <input
          className="border rounded block my-3 placeholder:text-base ps-3"
          placeholder="Please enter your email"
          type="text"
        />
        <input
          className="border rounded block my-3 placeholder:text-base ps-3"
          placeholder="Please enter your password"
          type="password"
          name=""
          id=""
        />
        <div className="flex justify-center items-center">
          <button className="text-lg font-semibold bg-red-400 rounded-md px-4 py-1 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
