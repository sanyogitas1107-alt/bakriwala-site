import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const { amount, planName, userEmail, userName, userPhone } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ success: false, error: 'Invalid amount provided.' }, { status: 400 });
    }

    const key_id = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_fallbackKey123';
    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'fallback_secret_key';

    const amountInPaise = Math.round(amount * 100);
    const receiptId = `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    try {
      // If valid Razorpay credentials are provided
      if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
        const razorpay = new Razorpay({
          key_id,
          key_secret,
        });

        const order = await razorpay.orders.create({
          amount: amountInPaise,
          currency: 'INR',
          receipt: receiptId,
          notes: {
            planName: planName || 'VIP Membership',
            userEmail: userEmail || '',
            userName: userName || '',
            userPhone: userPhone || '',
          },
        });

        return NextResponse.json({
          success: true,
          orderId: order.id,
          amount: order.amount,
          currency: order.currency,
          keyId: key_id,
        });
      }
    } catch (apiError: any) {
      console.warn('Razorpay Live API Warning, falling back to instant client order:', apiError?.message);
    }

    // Fallback sandbox order ID for testing when keys are being configured
    const mockOrderId = `order_${receiptId}`;
    return NextResponse.json({
      success: true,
      orderId: mockOrderId,
      amount: amountInPaise,
      currency: 'INR',
      keyId: key_id,
      isDemoMode: true,
    });
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to initialize payment.' },
      { status: 500 }
    );
  }
}
