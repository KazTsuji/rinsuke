import { headers } from 'next/headers';
import SmallPage from  './ScreenS/page';
import MediumPage from './ScreenM/page';
import LargePage from  './ScreenL/page';


export default async function HomePage() {
  // ユーザーエージェントの取得
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';

  // デバイス判定
  const isMobile = /Mobi|Android|iPhone/.test(userAgent);
  const isTablet = /iPad|Tablet/.test(userAgent);

  if (isMobile) {
    return <SmallPage />;
  } else if (isTablet) {
    return <MediumPage />;
  } else {
    return <LargePage />;
  }
}


/*
import Image from "next/image";
import HeroSection from '../components/HeroSection/HeroSection';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="bg-yellow-10">
      <Header />
      
      <HeroSection/>
      
      <Footer />
    </div>
  );
}
*/