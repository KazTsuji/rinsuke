import Image from "next/image";
import Header from '../../components/Header/Header';
import Access from './Access';
import Footer from '../../components/Footer/Footer';


export default function Home() {
  return (
    <div className="bg-yellow-10">
      <Header />
      <Access />
      <Footer />
    </div>
  );
}
