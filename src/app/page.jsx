import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full flex-1 text-center">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">
          Welcome to{' '}
          <span className="bg-cyan-700 p-3 rounded-md hover:bg-transparent hover:text-cyan-700 transition-all duration-150 cursor-default">
            Ceddit
          </span>
        </h1>
        <p className="text-lg">Your Daily Dose of Discussions.</p>
      </div>
    </div>
  );
}
