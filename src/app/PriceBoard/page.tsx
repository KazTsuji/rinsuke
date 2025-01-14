import Image from "next/image";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PriceBoard from './PriceBoard';


export default function Home() {
  return (
    <div className="bg-yellow-10">
      <Header />
      <PriceBoard />
      <Footer />
    </div>
  );
}
