"use client"
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // 使用するメールサービス
      auth: {
        user: 'your-email@gmail.com',  // 送信者のメールアドレス
        pass: 'your-email-password',   // 送信者のメールパスワード（アプリパスワードが必要な場合があります）
      },
    });

    // メールの送信内容
    const mailOptions = {
      from: email,  // 送信者
      to: 'your-email@example.com',  // 受信者（管理者のメールアドレス）
      subject: `お問い合わせ: ${name}`,
      text: `お名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: '送信成功' });
    } catch (error) {
      console.error('メール送信エラー', error);
      res.status(500).json({ message: 'メール送信に失敗しました' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
