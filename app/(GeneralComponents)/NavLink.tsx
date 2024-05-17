import { NavLinkProps } from '@/types/Navbar.types';
import Link from 'next/link';;

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {

  return (
    <Link href={href}>
      <span
        className={`px-4 py-2 text-black font-italic`}>
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
