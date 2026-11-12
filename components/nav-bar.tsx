//server component, can be an Async function, that is why it can fetch data successively
import React, { Suspense } from 'react';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import NavBarSideEffect from './nav-bar-side-effect';

//import { getSession } from '@/lib/auth/auth';

const Navbar = () => {
  //const session = await getSession();
  return (
    <nav className="border-b border-gray-200 bg-white ">
      <div className=" mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <Suspense fallback={<p>Loading...</p>}>
          <NavBarSideEffect />
        </Suspense>
      </div>
    </nav>
  );
};

export default Navbar;
