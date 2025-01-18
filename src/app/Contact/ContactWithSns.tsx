const ContactWithSns = () => {
    return (
      <div className=" bg-black text-white pt-10  flex flex-col items-center justify-center space-y-6">
        <p　className=" font-xl">LINEかInstagramからも問い合わせ可能です。</p>
        {/* LINEセクション */}
        <div className="bg-green-500 text-center py-6 px-6 rounded-md max-w-[400px] h-auto">
          <p className="font-bold text-lg">LINEで友達登録はこちらから</p>
        </div>
  
        {/* Instagramセクション */}
        <div
          className="text-center py-6 px-8 rounded-md max-w-[400px] h-auto"
          style={{
            background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)',
          }}
        >
          <a href="https://www.instagram.com/happi_rinsuke" className="font-bold text-lg">InstagramでDMはこちらから</a>
        </div>
      </div>
    );
  };
  
  export default ContactWithSns;
  