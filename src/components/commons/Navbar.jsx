import { Link } from 'react-router'
import { CameraLogo } from './Icons'

const Navbar = () => (
  <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10 sm:py-8">
    <Link to="/" aria-label="Beranda">
      <CameraLogo className="w-14 text-ink sm:w-48" />
    </Link>

    <nav>
      <Link
        to="/"
        className="border-b-2 border-brand pb-1 text-sm font-medium text-ink sm:text-base"
      >
        Home
      </Link>
    </nav>
  </header>
)

export default Navbar