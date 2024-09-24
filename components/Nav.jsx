"use client";

import Link from 'next/link'; //allow to navigate between pages
import Image from 'next/image'; //allow to use images
import { useState, useEffect } from 'react'; //allow to use state and effect
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'; //allow to use authentication

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        {/* Add content here, e.g., logo or text */}
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width = {30}
          height = {30}
          className='object-contain'
        />
      </Link>
    </nav>
  );
}

export default Nav;