import Image from "next/image";
import Header from '../../components/Header/Header';
import Contact from './Contact';
import Footer from '../../components/Footer/Footer';


export default function Home() {
  return (
    <div className="bg-yellow-10">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
