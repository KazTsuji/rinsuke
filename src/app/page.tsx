import { headers } from 'next/headers';
import SmallPage from './ScreenS/page';
import MediumPage from './ScreenM/page';
import LargePage from './ScreenL/page';

export default async function HomePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';

  // モバイルデバイス判定
  const isMobile = /Mobi|Android|iPhone/.test(userAgent);

  // タブレット判定
  const isServerSideTablet =
    /iPad|Tablet/.test(userAgent) || 
    (/Macintosh/.test(userAgent) && /Safari/.test(userAgent) && !/Mac OS X 10_15/.test(userAgent)); 

  // ラージデバイス判定 (デフォルト)
  const isLarge = !isMobile && !isServerSideTablet;

  if (isMobile) {
    return <SmallPage />;
  } else if (isServerSideTablet) {
    return <MediumPage />;
  } else if (isLarge) {
    return <LargePage />;
  }
}
