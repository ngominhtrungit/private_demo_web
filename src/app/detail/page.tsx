'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function DetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <main className="pt-[70px]" style={{ height: '700px'}}>
      <h1>Detail Page</h1>
      <p>Received id: {id}</p>
    </main>
  );
}
