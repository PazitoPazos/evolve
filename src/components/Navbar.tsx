import NavLinks from './NavLinks'

function Navbar() {
  return (
    <div className="absolute left-0 top-0 h-12 w-full bg-indigo-500 text-center">
      <nav className="inline-flex h-full items-center gap-4">
        <NavLinks />
      </nav>
    </div>
  )
}

export default Navbar
