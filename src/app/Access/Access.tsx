const Access = () => (
    <div className="flex flex-col items-center justify-center bg-blue-950 p-5">
      <div className="flex justify-center w-full mb-20">
        <img
          src="/images/map.png"
          alt="Map"
          className="w-full max-w-[800px] h-auto"
        />
      </div>
      <div>
        <button>
          <a
            href="https://maps.app.goo.gl/rAgvzrr5amQxaAV58"
            className="bg-green-500 font-black text-xl px-5 py-2 m-10 rounded-xl"
          >
            Google Mapで開く
          </a>
        </button>
      </div>
    </div>
  );
  
  export default Access;
  