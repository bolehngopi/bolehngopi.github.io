import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-2">Oops! Page not found.</p>
      <p className="text-lg text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href={"/"}
        className="flex items-center gap-2 bg-blue-600 px-6 py-2 text-lg rounded-lg hover:bg-blue-700 transition"
      >
        <FaHome />
        Back to Homepage
      </Link>
    </div>
  )
}