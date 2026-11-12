import React from 'react';
import { getSession } from '@/lib/auth/auth';
import { Button } from './ui/button';
import Link from 'next/link';
// Next.js 15+
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
//import { signOut } from '@/lib/auth/auth';
import SignOutButton from '@/client-components/sign-out-button';
type Props = {};

const NavBarSideEffect = async (props: Props) => {
  const session = await getSession();

  return (
    <div className="flex items-center gap-4">
      {session?.user ? (
        <>
          {' '}
          <Link href="/dashboard">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Dashboard
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  className="relative h-11 w-11 rounded-full hover:bg-primary"
                >
                  <Avatar>
                    <AvatarFallback className="bg-gray-800 text-white">
                      {session.user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              }
            ></DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1.5">
                    <p className="text-sm font-medium leading-none">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground leading-none">
                      {session.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <SignOutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link href="/sign-in">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-primary hover:bg-primary/90">
              Start for free
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBarSideEffect;
