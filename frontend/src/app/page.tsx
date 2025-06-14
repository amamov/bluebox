import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold">HELLO BLUEBOX</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        욕망 시뮬레이션
      </h2>
      <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow hover:bg-blue-700 transition">
        [게임시작]
      </button>
    </div>
  );
}
