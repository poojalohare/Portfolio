

import React from 'react';

const Welcome = () => {
  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/Pooja.txt'; 
    link.download = 'Pooja.pdf'; 

  
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='welcome-container'>
     <img className='background' src="/public/image/welcome.jpg" alt="Welcome" />
      <div className='welcome-text'>
     <h3>HI <span > , </span>I AM </h3><br/><h2>POOJA <br/>LOHARE</h2>
     <p className='par-text'>SOFTWARE ENGINEER AND FRONTEND DEVELOPER </p>
     <button onClick={handleDownload}>Download Resume</button>
     
      </div>
    </div>
  );
};

export default Welcome;
