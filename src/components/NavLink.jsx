'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ children, href, ...props }) {
  const isActive = href === usePathname();
  const activeStyle = 'bg-cyan-800 text-white';
  const inactiveStyle = 'text-slate-900 hover:bg-cyan-700 hover:text-white';

  return (
    <Link href={href} {...props} className={`${isActive ? activeStyle : inactiveStyle} rounded-md px-3 py-2 text-sm font-medium`}>
      {children}
    </Link>
  );
}

export default NavLink;
