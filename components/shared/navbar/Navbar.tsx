'use client';

import { SignedIn, UserButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  return (
    <>
      <nav className="flex-between background-light900_dark200 fixed z-50 w-full items-center justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/owl.png"
            width={45}
            height={45}
            alt="BinaryBeat"
          />

          <p className="h2-bold max-sm:h3-bold font-spaceGrotesk text-violet-500 dark:text-light-900">
            BinaryBeat
          </p>
        </Link>

        <div className="flex w-full  flex-row items-center justify-between font-spaceGrotesk  max-sm:hidden">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) &&
                item.route.length > 1) ||
              pathname === item.route;

            if (item.route === '/profile') {
              if (userId) {
                item.route = `${item.route}/${userId}`;
              } else {
                return null;
              }
            }

            return (
              <Link
                href={item.route}
                key={item.label}
                className="text-dark300_light900 ml-[9rem] flex p-3"
              >
                <p
                  className={`${
                    isActive ? 'base-bold ' : 'base-medium '
                  } `}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex-between ml-[1rem] mr-[-2rem] gap-5">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                },
                variables: {
                  colorPrimary: '#ff7000',
                },
              }}
            />
          </SignedIn>
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
