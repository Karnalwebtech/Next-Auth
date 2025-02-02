import { Logo } from "./logo";
import { Navigation } from "./Navigation";
import { UserDropdown } from "./UserDropdown";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
            <Navigation />
          </div>
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}

