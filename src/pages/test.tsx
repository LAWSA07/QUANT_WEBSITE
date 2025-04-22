import React from 'react';
import Head from 'next/head';

const TestPage = () => {
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900 p-8">
        <h1 className="text-3xl font-bold">Test Page</h1>
        <p className="mt-4">This is a simple test page to check if rendering works.</p>
      </main>
    </>
  );
};

export default TestPage;
