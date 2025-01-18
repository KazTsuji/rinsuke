'use client';
import { motion } from "framer-motion";

export default function MediumPage() {
    return (
        <section className="relative bg-black bg-cover bg-center text-white min-h-screen overflow-hidden">
          {/* Section 1 */}
          <div className="container mx-auto px-4">
            {/* Image 1 */}
            <motion.div
              className="absolute left-4 md:left-8"
              style={{ top: "50px" }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <img
                src="/images/s1.png"
                alt="Image 1"
                className="w-24 md:w-32 lg:w-40 h-auto"
              />
            </motion.div>
    
            {/* Description 1 */}
            <motion.div
              className="absolute px-4 md:px-6 text-center text-base md:text-lg font-medium w-full max-w-xl left-1/2 -translate-x-1/2"
              style={{ top: "200px" }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>既存の法被の襟を新しいものに交換いたします。役職をお持ちの方にとっては、新しい法被を購入されるよりも、費用を抑えて対応することが可能です。<br/><br/>￥3000〜</p>
            </motion.div>
    
            {/* Illust 1 */}
            <motion.div
              className="absolute right-4 md:right-8"
              style={{ top: "30px" }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <img
                src="/images/i1.png"
                alt="Illustration 1"
                className="w-28 md:w-36 lg:w-44 h-auto"
              />
            </motion.div>
          </div>
    
          {/* Section 2 */}
          <div className="container mx-auto px-4">
            {/* Image 2 */}
            <motion.div
              className="absolute right-4 md:right-8"
              style={{ top: "450px" }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <img
                src="/images/s2.png"
                alt="Image 2"
                className="w-24 md:w-32 lg:w-40 h-auto"
              />
            </motion.div>
    
            {/* Description 2 */}
            <motion.div
              className="absolute px-4 md:px-6 text-center text-base md:text-lg font-medium w-full max-w-xl left-1/2 -translate-x-1/2"
              style={{ top: "600px" }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>お客様の手首に最適なフィット感を提供するため、袖部分を丁寧に絞り加工いたします。また、着脱をよりスムーズに行えるよう、ファスナーを取り付けております。このファスナーは、開閉時のストレスを極力軽減する設計を採用し、快適な使用感を実現しています。これにより、機能性と快適性を両立させた仕様となっております。<br/><br/>￥6500〜</p>
            </motion.div>
    
            {/* Illust 2 */}
            <motion.div
              className="absolute left-4 md:left-8"
              style={{ top: "450px" }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <img
                src="/images/i2.png"
                alt="Illustration 2"
                className="w-28 md:w-36 lg:w-44 h-auto"
              />
            </motion.div>
          </div>
    
          {/* Section 3 */}
          <div className="container mx-auto px-4">
            {/* Image 3 */}
            <motion.div
              className="absolute left-4 md:left-8"
              style={{ top: "850px" }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <img
                src="/images/s3.png"
                alt="Image 3"
                className="w-24 md:w-32 lg:w-40 h-auto"
              />
            </motion.div>
    
            {/* Description 3 */}
            <motion.div
              className="absolute px-4 md:px-6 text-center text-base md:text-lg font-medium w-full max-w-xl left-1/2 -translate-x-1/2"
              style={{ top: "1000px" }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>筒袖は、袖全体がまっすぐに伸びる特徴的な形状を持ち、動きやすさと機能性を兼ね備えています。袖が邪魔になることなく快適にご使用いただけます。袖口の仕上げには、必要に応じて調整を行い、お客様の腕に適したフィット感を提供いたします。<br/><br/>￥6000〜</p>
            </motion.div>
    
            {/* Illust 3 */}
            <motion.div
              className="absolute right-4 md:right-8"
              style={{ top: "850px" }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <img
                src="/images/i3.png"
                alt="Illustration 3"
                className="w-28 md:w-36 lg:w-44 h-auto"
              />
            </motion.div>
          </div>
        </section>
    );
}