const PriceBoard = () => (
  <div className="flex flex-col items-center justify-center bg-[url('/images/bg.png')] px-7 min-h-screen">
    <div className="flex justify-center w-full">
    <h1 className="text-3xl font-bold text-center m-10">料金表</h1>
    </div>
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-700 text-white text-xl">
          <th className="border border-gray-300 px-4 py-5 text-left">サービス内容</th>
          <th className="border border-gray-300 px-5 py-5 text-left">料金（税込）</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td className="border border-gray-300 px-5 py-5">襟交換</td>
          <td className="border border-gray-300 px-5 py-5">3,000円</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-5 py-5">鉄砲袖</td>
          <td className="border border-gray-300 px-5 py-5">6,500円</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-5 py-5">筒袖</td>
          <td className="border border-gray-300 px-5 py-5">6,000円</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-5 py-5">ポケット縫い付け</td>
          <td className="border border-gray-300 px-5 py-5">2,000円</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-5 py-5">丈詰め</td>
          <td className="border border-gray-300 px-5 py-5">2,000円</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PriceBoard;
