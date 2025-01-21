// app/api/sendEmail/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // リクエストボディの解析
    const { name, email, message } = await req.json();

    // nodemailer のトランスポーター設定
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmail を使用
      auth: {
        user: process.env.EMAIL_USER, // 環境変数から取得
        pass: process.env.EMAIL_PASS, // アプリパスワード
      },
    });

    // メールオプション
    const mailOptions = {
      from: process.env.EMAIL_USER, // 送信元（固定）
      to: 'tujikawa5950023@gmail.com', // 宛先（固定）
      subject: `Contact form submission from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // メール送信
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    // 成功レスポンス
    return new Response('Email sent successfully', { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);

    // エラーレスポンス
    return new Response('Failed to send email', { status: 500 });
  }
}
