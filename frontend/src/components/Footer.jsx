import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer
        className="bg-dark text-center text-lg-start text-white"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
        }}
      >
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          All rights reserved 2025 to Shubhankar Garg
        </div>
      </footer>
    </div>
  );
};

export default Footer;
