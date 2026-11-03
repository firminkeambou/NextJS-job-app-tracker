import React from 'react';
import { Button } from '@/components/ui/button'; // this component was created after running  npx shadcn@latest add button
import ImageTabs from '@/client-components/image-tabs';
import Link from 'next/link';
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from 'lucide-react';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/** Hero Section */}
        <section className="container mx-auto  px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job search in one place
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-4 text-lg font-medium">
                  Start for free <ArrowRight className="ml-1" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forver . no credit card required.{' '}
              </p>
            </div>
          </div>
        </section>
        {/* Hero Images Section with Tabs*/}
        <section className="pb-14">
          <ImageTabs />
        </section>
        {/* Features Section */}
        <section className="border-t border-gray-200 bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Organize Applications
                </h3>
                <p className="text-muted-foreground text-justify">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-muted-foreground text-justify">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-muted-foreground text-justify">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
