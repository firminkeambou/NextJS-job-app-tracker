'use client';
import { Board } from '@/lib/models/models.types';
import React from 'react';
interface KanbanBoardProps {
  board: Board;
  userId: string;
}
const KanBanBoard = ({ board, userId }: KanbanBoardProps) => {
  return <div>KanBanBoard</div>;
};

export default KanBanBoard;
