import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <div style={logoStyle}>
          <img src="/images/logo.png" alt="Website Logo" style={{ width: '100px', height: 'auto' }} />
        </div>
        <div style={companyNameStyle}>
          Laflamme Company
        </div>
      </div>
      <nav style={navigationStyle}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}


const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  margin: '0',
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  width: '100px',
  height: 'auto',
};

const companyNameStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'black',
  marginLeft: '10px', 
};

const navigationStyle = {
  display: 'flex',
  justifyContent: 'space-between', 
  width: '100%',
  flexWrap: 'wrap', 
  marginTop: '10px', 
};


export default Header;