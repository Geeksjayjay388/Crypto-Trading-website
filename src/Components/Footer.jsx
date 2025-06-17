import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-10 mt-20">
      {/* Top Section */}
      <section className="flex flex-wrap justify-between gap-6">
        {/* Main Image Section */}
        <div className="h-72 w-full md:w-1/2 lg:w-1/3 bg-[url('https://www.shutterstock.com/image-photo/bitcoin-cryptocurrency-coins-gold-bar-600nw-2517492671.jpg')] bg-cover bg-center rounded-xl flex items-center justify-center p-6">
          <p className="text-xl font-bold text-center bg-black/50 p-4 rounded-lg">
            All about Investing in NFTs and related risks
          </p>
        </div>

        {/* Info Section 1 */}
        <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center w-full md:w-1/4 shadow-md">
          <img src="https://cdn-icons-png.flaticon.com/512/1176/1176015.png" alt="Crypto Icon" className="w-12 h-12 mb-4" />
          <p className="text-lg font-semibold">What is cryptocurrency?</p>
          <p className="text-gray-300 text-center">
            Cryptocurrencies are digital assets secured by cryptography, ensuring decentralized control and security.
          </p>
        </div>

        {/* Info Section 2 */}
        <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center w-full md:w-1/4 shadow-md">
          <img src="https://cdn-icons-png.flaticon.com/512/2913/2913963.png" alt="Blockchain Icon" className="w-12 h-12 mb-4" />
          <p className="text-lg font-semibold">Why does it matter?</p>
          <p className="text-gray-300 text-center">
            Blockchain technology enables secure, transparent financial transactions, revolutionizing global trade.
          </p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Details */}
        <div>
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-gray-400 mt-2">
            We are dedicated to providing insights, investment opportunities, and secure transactions in the crypto space.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="text-gray-400 mt-2">📍 123 Crypto Street, Blockchain City</p>
          <p className="text-gray-400">📧 support@cryptofirm.com</p>
          <p className="text-gray-400">📞 +123 456 7890</p>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-xl font-bold">Accepted Payments</h3>
          <div className="flex gap-4 mt-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2173/2173765.png" alt="Visa" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Mastercard" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/825/825447.png" alt="PayPal" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/825/825505.png" alt="Bitcoin" className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="mt-10 text-center">
        <p className="text-gray-400">&copy; 2025 Crypto Insights. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
