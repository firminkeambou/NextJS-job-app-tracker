'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
//[calc(100vh-4rem)]  compute the height of the page minus the size of the navbar(4rem)

const SignUp = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center flex-col pd-4 bg-white">
      <Card className="w-full max-w-md border-gray-200 shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create an account to start tracking your job applications.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-1">
            <div className="grid gap-1.5 p-4">
              <Label htmlFor="name" className="text-gray-800">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="border-gray-300 focus-visible:border-primary focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-1.5 p-4">
              <Label htmlFor="email" className="text-gray-800">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                className="border-gray-300 focus-visible:border-primary focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-1.5 p-4">
              <Label htmlFor="password" className="text-gray-800">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                minLength={8}
                placeholder="••••••••"
                className="border-gray-300 focus-visible:border-primary focus-visible:ring-primary"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-0">
            <Button
              className="w-full bg-primary hover:bg-primary/80"
              type="submit"
            >
              Sign Up
            </Button>
            <p>
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
