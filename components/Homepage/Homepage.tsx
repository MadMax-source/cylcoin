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
        {/*  main content */}
        {/* first sections*/}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-success/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/20 rounded-full text-success text-sm font-medium mb-6"></div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"></h1>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto"></p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"></div>
              <div className="bg-surface rounded-3xl p-8 border border-border max-w-3xl mx-auto"></div>
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
