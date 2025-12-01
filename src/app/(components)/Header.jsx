import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href='/'>Attendance</Link>
          <Link href='/profile'>Profile</Link>
        </div>
      </div>
    </header>
  );
}