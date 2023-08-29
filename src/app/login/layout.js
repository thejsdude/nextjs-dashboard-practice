import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h1 className="text-center my-4 font-semibold text-2xl">Dashboard</h1>
      <div className="grid grid-cols-4">
        {/* Header/Navigation Menu */}
        <div className="border p-5 min-h-screen">
          <ul className="flex flex-col items-center justify-center">
            <Link href="/login">
              <li className="mb-4 bg-blue-400 px-4 py-1 rounded text-white font-semibold">
                Home
              </li>
            </Link>
            <Link href="/login/teacherLogin">
              <li className="mb-4 bg-blue-400 px-4 py-1 rounded text-white font-semibold">
                Teacher Login
              </li>
            </Link>
            <Link href="/login/studentLogin">
              <li className="mb-4 bg-blue-400 px-4 py-1 rounded text-white font-semibold">
                Student Login
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-3 border min-h-screen">{children}</div>
      </div>
    </div>
  );
}
