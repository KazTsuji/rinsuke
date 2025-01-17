const Access = () => (
  <div className="flex flex-col items-center justify-center bg-[url('/images/bg.png')] px-5 py-10">
    <div className="flex justify-center w-full mb-10">
      <img
        src="/images/map.png"
        alt="Map"
        className="w-full max-w-[800px] sm:w-[600px] h-auto"
      />
    </div>
    <div>
      <button className="bg-yellow-600 font-black text-xl px-3 py-2 rounded-xl  sm:w-[300px]">
        <a
          href="https://maps.app.goo.gl/rAgvzrr5amQxaAV58"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Google Mapで開く
        </a>
      </button>
    </div>
  </div>
);

export default Access;
