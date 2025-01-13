"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/send-email', {  // APIエンドポイントを利用
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('メール送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラーが発生しました。', error);
    }
  };

  return (
    <div className="h-auto bg-black">
    <div className="container mx-auto p-20 ">
      <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg">お名前</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-lg">メールアドレス</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-lg">メッセージ</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded mt-4"
        >
          送信
        </button>
      </form>

      {isSubmitted && <p className="text-green-200 mt-2">メッセージが送信されました。ありがとうございます！</p>}
    </div>
    </div>
  );
};

export default Contact;
