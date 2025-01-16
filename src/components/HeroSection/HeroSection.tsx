"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  

  // Update window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  // Define responsive animation settings
  const getAnimationSettings = () => {
    if (windowWidth < 432) {
      return {
        // image1
        initial1: { y: 100, opacity: 0 },
        animate1: { y: 0, opacity: 1 },
        transition1: { duration: 0.8 },
        //description1
        initial2: { opacity: 0, filter: "blur(10px)"  },
        animate2: { opacity: 1, filter: "blur(0px)" },
        transition2: { duration: 1, delay: 0.5 },
        //illust1
        initial3: { y: 0, x: 430, opacity: 0  },
        animate3: { y: 0, x: 400, opacity: 1 },
        transition3: { duration: 0.8, delay: 1 },
        imageMaxWidth: "120px",
        textSize: "text-base",
      };
    } else if (windowWidth < 1024) {
      return {
        // image1
        initial1: { y: 0, opacity: 0 },
        animate1: { y: 0, opacity: 1 },
        transition1: { duration: 0.8 },
        //description1
        initial2: { opacity: 0, filter: "blur(10px)"  },
        animate2: { opacity: 1, filter: "blur(0px)" },
        transition2: { duration: 1, delay: 0.5 },
        //illust1
        initial3: { y: 100, x: 1010, opacity: 0  },
        animate3: { y: 0, x: 920, opacity: 1 },
        transition3: { duration: 0.8, delay: 1 },
        imageMaxWidth: "180px",
        textSize: "text-lg",
      };
    } else {
      return {
        /*
        */
        // image1
        initial1: { y: 0, opacity: 0 },
        animate1: { y: 0, opacity: 1 },
        transition1: { duration: 0.8 },
        //description1
        initial2: { opacity: 0, filter: "blur(10px)"  },
        animate2: { opacity: 1, filter: "blur(0px)" },
        transition2: { duration: 1, delay: 0.5 },
        //illust1
        initial3: { y: 0, x: 1380, opacity: 0  },
        animate3: { y: 0, x: 1280, opacity: 1 },
        transition3: { duration: 0.8, delay: 1 },
        imageMaxWidth: "300px",
        textSize: "text-xl",
      };
    }
  };


  const settings = getAnimationSettings();

  // Debugging animation settings
  useEffect(() => {
    console.log("Animation settings:", settings);
  }, [settings]);

  return (
    <section className="relative bg-black bg-cover bg-center text-white  min-h-[1650px]">
      {/* Section 1 */}
      <div>
        {/* Image 1 */}
        <motion.div
          className="absolute p-5"
          initial={settings.initial1}
          whileInView={settings.animate1}
          viewport={{ once: true }}
          transition={settings.transition1}
        >
          <img
            src="/images/s1.png"
            alt="Image 1"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>

        {/* Description 1 */}
        <motion.div
          className={`absolute px-5 text-center font-bold max-w-[600px] ${settings.textSize}`}
          style={{ left: "50%", transform: "translateX(-50%)", top: "300px" }}
          initial={settings.initial2}
          whileInView={settings.animate2}
          viewport={{ once: true }}
          transition={settings.transition2}
        >
          <p>
            既存の法被の襟を新しいものに交換いたします。役職をお持ちの方にとっては、新しい法被を購入されるよりも、費用を抑えて対応することが可能です。<br /><br />￥2000〜
          </p>
        </motion.div>

        {/* Illustration 1 */}
        <motion.div
          className="absolute p-5"
          initial={settings.initial3}
          whileInView={settings.animate3}
          viewport={{ once: true }}
          transition={settings.transition3}
        >
          <img
            src="/images/i1.png"
            alt="Illustration 1"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="pt-24 h-auto"
          />
        </motion.div>
      </div>

      {/* Section 2 */}
      <div>
        {/* Image 2 */}
        <motion.div
          className="absolute p-5"
          initial={{ y: 1000, x: 1330, opacity: 0 }}
          whileInView={{ y: 530, x: 1330, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8}}
        >
          <img
            src="/images/s2.png"
            alt="Image 2"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>

        {/* Description 2 */}
        <motion.div
          className={`absolute p-5 text-center font-bold max-w-[600px] ${settings.textSize}`}
          style={{ left: "50%", transform: "translateX(-50%)", top: "800px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            お客様の手首に最適なフィット感を提供するため、袖部分を丁寧に絞り加工いたします。ファスナーは快適な使用感を実現。<br /><br />￥3000〜
          </p>
        </motion.div>

        {/* Illustration 2 */}
        <motion.div
          className="absolute p-5"
          initial={{ y: 530, x: -300, opacity: 0 }}
          whileInView={{ y: 530, x: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <img
            src="/images/i2.png"
            alt="Illustration 2"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="pt-24 h-auto"
          />
        </motion.div>
      </div>

      {/* Section 3 */}
      <div>
        {/* Image 3 */}
        <motion.div
          className="absolute p-5"
          initial={{ y: 1500, opacity: 0 }}
          whileInView={{ y: 1060, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/s3.png"
            alt="Image 3"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>

        {/* Description 3 */}
        <motion.div
          className={`absolute p-5 text-center font-bold max-w-[600px] ${settings.textSize}`}
          style={{ left: "50%", transform: "translateX(-50%)", top: "1300px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            筒袖は袖全体がまっすぐに伸びる特徴的な形状を持ち、快適にご使用いただけます。<br /><br />￥2000〜
          </p>
        </motion.div>

        {/* Illustration 3 */}
        <motion.div
          className="absolute p-5"
          initial={{ y: 1060, x: 1630, opacity: 0 }}
          whileInView={{ y: 1060, x: 1280, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <img
            src="/images/i3.png"
            alt="Illustration 3"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="pt-24 h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


/*
return (
    <section className="relative bg-black bg-cover bg-center text-white  min-h-[1650px]">
      
      <div>
       
        <motion.div
          className="absolute p-5"
          initial={settings.initial}
          whileInView={settings.animate}
          viewport={{ once: true }}
          transition={settings.transition}
        >
          <img
            src="/images/s1.png"
            alt="Image 1"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>

        
        <motion.div
          className={`absolute px-5 text-center font-bold max-w-[600px] ${settings.textSize}`}
          style={{ left: "50%", transform: "translateX(-50%)", top: "300px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            既存の法被の襟を新しいものに交換いたします。役職をお持ちの方にとっては、新しい法被を購入されるよりも、費用を抑えて対応することが可能です。<br /><br />￥2000〜
          </p>
        </motion.div>

       
        <motion.div
          className="absolute p-5"
          initial={{ y: 0, x: 1630, opacity: 0 }}
          whileInView={{ y: 0, x: 1280, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <img
            src="/images/i1.png"
            alt="Illustration 1"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>
      </div>

    
      <div>
       
        <motion.div
          className="absolute p-5"
          initial={{ y: 1000, x: 1330, opacity: 0 }}
          whileInView={{ y: 530, x: 1330, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8}}
        >
          <img
            src="/images/s2.png"
            alt="Image 2"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>

        
        <motion.div
          className={`absolute p-5 text-center font-bold max-w-[600px] ${settings.textSize}`}
          style={{ left: "50%", transform: "translateX(-50%)", top: "800px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            お客様の手首に最適なフィット感を提供するため、袖部分を丁寧に絞り加工いたします。ファスナーは快適な使用感を実現。<br /><br />￥3000〜
          </p>
        </motion.div>

       
        <motion.div
          className="absolute p-5"
          initial={{ y: 530, x: -300, opacity: 0 }}
          whileInView={{ y: 530, x: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <img
            src="/images/i2.png"
            alt="Illustration 2"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>
      </div>

      <div>
       
        <motion.div
          className="absolute p-5"
          initial={{ y: 1500, opacity: 0 }}
          whileInView={{ y: 1060, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/s3.png"
            alt="Image 3"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>

        <motion.div
          className={`absolute p-5 text-center font-bold max-w-[600px] ${settings.textSize}`}
          style={{ left: "50%", transform: "translateX(-50%)", top: "1300px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            筒袖は袖全体がまっすぐに伸びる特徴的な形状を持ち、快適にご使用いただけます。<br /><br />￥2000〜
          </p>
        </motion.div>

    
        <motion.div
          className="absolute p-5"
          initial={{ y: 1060, x: 1630, opacity: 0 }}
          whileInView={{ y: 1060, x: 1280, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <img
            src="/images/i3.png"
            alt="Illustration 3"
            style={{ maxWidth: settings.imageMaxWidth }}
            className="h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
*/