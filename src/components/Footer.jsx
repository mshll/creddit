function Footer() {
  return (
    <footer className="self-center mx-auto text-xs text-slate-900 p-4 tracking-widest">
      <span>Made with </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="inline-block m-auto text-red-400 mb-1">
          <path
            fill="currentColor"
            fillOpacity="0"
            d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
          >
            <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" />
          </path>
          <path
            fill="none"
            stroke="currentColor"
            strokeDasharray="32"
            strokeDashoffset="32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
          >
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
          </path>
        </svg>
      </span>{' '}
      <span>
        by <span className="text-cyan-700 font-semibold">Meshal</span> & <span className="text-cyan-700 font-semibold">Abdullah</span>
      </span>
    </footer>
  );
}

export default Footer;
