import React from 'react';
import Link from "next/link";

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Chào mừng bạn đến với kênh của mình nhé!</h1>
      <p className="mb-6">Hãy khám phá thêm về mình nhé!</p>
      <Link href="/portfolio">
        <p className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Đến trang Portfolio
        </p>
      </Link>
    </div>
  );
};

export default WelcomePage;