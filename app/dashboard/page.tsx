import KanBanBoard from '@/client-components/kanban-board';
import { getSession } from '@/lib/auth/auth';
import { Board } from '@/lib/models';
import connectDB from '@/lib/mongoose-db';
import { redirect } from 'next/navigation';
import React from 'react';
export const instant = false; //block navigation until auth is verified before showing any dashboard UI.
const DashBoard = async () => {
  // checking the link "/dashboard"
  const session = await getSession();
  if (!session?.user) {
    redirect('/sign-in');
  }

  await connectDB();

  const board = await Board.findOne({
    userId: session.user.id,
    name: 'Job Hunt',
  });
  console.log('board', board);
  return (
    <div className="min-h-screen bg-white">
      <div className="conatiner mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">{board.name}</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        <KanBanBoard board={board} userId={session.user.id} />
      </div>
    </div>
  );
};

export default DashBoard;
