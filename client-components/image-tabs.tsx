'use client'; // turn this into a client component
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // this component was created after running  npx shadcn@latest add button
const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState('organize'); // organize, hired, boards
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-6xl">
        {/** Tabs */}
        <div className="flex gap-2 justify-center mb-8">
          <Button
            variant={activeTab === 'organize' ? 'default' : 'outline'}
            onClick={() => setActiveTab('organize')}
          >
            Organize Applications
          </Button>
          <Button
            variant={activeTab === 'hired' ? 'default' : 'outline'}
            onClick={() => setActiveTab('hired')}
          >
            Get Hired
          </Button>
          <Button
            variant={activeTab === 'boards' ? 'default' : 'outline'}
            onClick={() => setActiveTab('boards')}
          >
            Manage Boards
          </Button>
        </div>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-2xl">
          {/** Images */}
          {activeTab === 'organize' && (
            <Image
              src="/hero-images/hero1.png"
              alt="Organize Applications"
              width={1200}
              height={800}
              loading="eager"
            />
          )}
          {activeTab === 'hired' && (
            <Image
              src="/hero-images/hero2.png"
              alt="Get Hired"
              width={1200}
              height={800}
              loading="eager"
            />
          )}
          {activeTab === 'boards' && (
            <Image
              src="/hero-images/hero3.png"
              alt="Manage Boards"
              width={1200}
              height={800}
              loading="eager"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTabs;
