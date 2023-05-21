import Link from 'next/link';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center pt-3 bg-slate-700 p-3 gap-2 md:gap-0">
      <h1 className="text-2xl text-blue-100">
        <Link href="/">WikiSearcher</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;
