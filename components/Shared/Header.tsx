import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* cylcoin Logo */}
            <div className="p-2 rounded-xl bg-primary/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-coins w-6 h-6 text-primary"
              >
                <circle cx="8" cy="8" r="6"></circle>
                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                <path d="M7 6h1v4"></path>
                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold">CYLCoin</h1>
              <p className="text-xs text-muted">Cycle Exchange</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/*crypto payment color*/}
            <div className="flex items-center gap-2 bg-surface rounded-xl px-4 py-2 border border-success/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up w-4 h-4 text-success"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span className="text-sm font-bold text-success">
                $ <span>33,367.25</span>
              </span>
              <span className="text-xs text-success">
                +$ <span>0.040</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/*signup*/}
            <button className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
