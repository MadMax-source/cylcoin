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
        <section className="py-20 bg-surface/50"></section>
        {/* third sections*/}
        <section className="py-20"></section>
        {/* fourth sections*/}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-success/10"></section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
