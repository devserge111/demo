import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">MyApp</Link>

        {/* Desktop nav */}
        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-6">
            <NavigationMenu.Item>
              <Link to="/" className="hover:underline">Home</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link to="/calendar" className="hover:underline">Calendar</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="inline-flex items-center gap-1 hover:underline">
                More <ChevronDownIcon />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute mt-2 rounded-xl border bg-white p-3 shadow">
                <div className="grid min-w-[220px] gap-2">
                  <Link to="/about" className="rounded-lg px-3 py-2 hover:bg-gray-50">About</Link>
                  <Link to="/contact" className="rounded-lg px-3 py-2 hover:bg-gray-50">Contact</Link>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile menu */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="md:hidden rounded-xl border p-2">
            <HamburgerMenuIcon />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="end"
            className="z-50 mt-2 w-48 rounded-xl border bg-white p-1 shadow"
          >
            <DropdownMenu.Item asChild>
              <Link to="/" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Home</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link to="/calendar" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Calendar</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
            <DropdownMenu.Item asChild>
              <Link to="/about" className="block rounded-lg px-3 py-2 hover:bg-gray-50">About</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link to="/contact" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Contact</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  )
}
