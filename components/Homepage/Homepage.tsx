import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Homepage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="pt-16">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-success/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/20 rounded-full text-success text-sm font-medium mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-zap w-4 h-4"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Live on Avalanche, Ethereum & Coinbase
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Trade
                <span className="text-primary"> Cylcoin</span>
                <br></br>
                <span className="text-success">Value only Grows</span>
              </h1>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                The first fixed-value cryptocurrency that never devalues. Trade CYL across
                Avalanche, Ethereum, and Coinbase networks with guaranteed upward momentum.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                  Start Trading
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-right w-5 h-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-surface border border-border rounded-2xl font-semibold text-lg hover:border-primary/50 transition-all">
                  Member Login
                </button>
              </div>
              <div className="bg-surface rounded-3xl p-8 border border-border max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    Live CYL Price
                  </span>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  $ {/*live value*/}
                  <span>33,432.82</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trending-up w-5 h-5"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span className="font-medium">Only increases • Never devalues</span>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface-elevated rounded-xl">
                    <span className="text-lg">🔺</span>
                    <span className="text-sm font-medium">AVAX</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface-elevated rounded-xl">
                    <span className="text-lg">Ξ</span>

                    <span className="text-sm font-medium">ETH</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface-elevated rounded-xl">
                    <span className="text-lg">🔵</span>
                    <span className="text-sm font-medium">BASE</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 bg-surface-elevated rounded-xl">
                    <span className="text-lg">₿</span>
                    <span className="text-sm font-medium">BTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* second sections*/}
        <section className="py-20 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trade CYLCoin?</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Revolutionary tokenomics designed for sustainable growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trending-up w-6 h-6 text-primary"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Value Only Grows</h3>
                <p className="text-sm text-muted">
                  Price increases with every transaction, visit, and partnership
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shield w-6 h-6 text-primary"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Secure Trading</h3>
                <p className="font-semibold text-lg mb-2">
                  Trade across Avalanche, Ethereum, and Coinbase networks
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-users w-6 h-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Referral Rewards</h3>
                <p className="text-sm text-muted">Earn $25 CYL per qualified referral</p>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-credit-card w-6 h-6 text-primary"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Easy Deposits</h3>
                <p className="text-sm text-muted">Fund via PayPal, Credit Card, or Crypto</p>
              </div>
            </div>
          </div>
        </section>

        {/* third sections*/}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-muted">Start trading CYLCoin today</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-surface rounded-2xl p-6 border transition-all border-border">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">$0 9.99</span>
                  <span className="text-muted">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Wallet access</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Basic transfers</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>
                      1.8
                      <span>% transfer fee</span>
                    </span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl font-semibold transition-all bg-surface-elevated border border-border hover:border-primary/50">
                  Get Started
                </button>
              </div>
              <div className="bg-surface rounded-2xl p-6 border transition-all border-primary ring-2 ring-primary/20">
                <div className="text-xs font-bold text-primary mb-2">MOST POPULAR</div>
                <h3 className="text-xl font-bold mb-2"> Premium</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">$19.99</span>
                  <span className="text-3xl font-bold">
                    $<span>29.99</span>
                  </span>
                  <span className="text-muted">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Priority transfers</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Lower fees (1.5%)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Phone support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>1.5 % transfer fee</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl font-semibold transition-all bg-primary text-white hover:bg-primary-hover">
                  Get Started
                </button>
              </div>
              <div className="bg-surface rounded-2xl p-6 border transition-all border-border">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">$ 99.99</span>
                  <span className="text-sm text-muted">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>All Premium features</span>
                  </li>

                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Custom limits</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Dedicated manager</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check-circle w-4 h-4 text-success"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>1.2 % transfer fee</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl font-semibold transition-all bg-surface-elevated border border-border hover:border-primary/50">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* fourth sections*/}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-success/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Trading CYLCoin Today</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">
                Join thousands of traders on the only cryptocurrency guaranteed to grow in value.
              </p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-primary-hover transition-all">
                Create Free Account
              </button>
              <p className="text-sm text-muted mt-4">Contact: info.cylcoin@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
