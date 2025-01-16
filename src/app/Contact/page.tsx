import Image from "next/image";
import ContactWithSns from './ContactWithSns';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="bg-yellow-10">
      <ContactWithSns />
      <Contact />
    </div>
  );
}
