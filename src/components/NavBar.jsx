import React from 'react';
import Image from 'next/image';
import logo from '@/images/creddit-logo.webp';
import NavLink from './NavLink';
import Link from 'next/link';

function NavBar() {
  return (
    <>
      <nav className="bg-slate-50 border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href={'/'}>
                <Image src={logo} alt="Creddit Logo" width={40} height={40} />
              </Link>
            </div>
            <div className="flex space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/posts">Posts</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
