import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Laflamme Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
