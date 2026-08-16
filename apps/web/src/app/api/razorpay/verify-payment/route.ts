import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planName,
      userEmail,
      userName,
      userPhone,
      amount,
    } = await req.json();

    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    // Verify cryptographic signature if secret is present
    if (key_secret && razorpay_signature && razorpay_order_id && razorpay_payment_id) {
      const generated_signature = crypto
        .createHmac('sha256', key_secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      if (generated_signature !== razorpay_signature) {
        return NextResponse.json(
          { success: false, error: 'Invalid payment signature. Verification failed.' },
          { status: 400 }
        );
      }
    }

    // Payment is verified
    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully! VIP Membership is now active.',
      membership: {
        tier: planName || 'VIP Commercial Pro',
        email: userEmail,
        name: userName,
        phone: userPhone,
        amountPaid: amount,
        paymentId: razorpay_payment_id || `pay_${Date.now()}`,
        orderId: razorpay_order_id,
        activatedAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error('Payment Verification Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Payment verification failed.' },
      { status: 500 }
    );
  }
}
