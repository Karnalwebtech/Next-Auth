import Link from "next/link"

export function Navigation() {
  return (
    <nav className="hidden md:ml-6 md:flex md:space-x-8">
      <Link href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        Dashboard
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        Projects
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        Team
      </Link>
    </nav>
  )
}

