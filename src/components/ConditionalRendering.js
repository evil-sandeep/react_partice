import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {isLogged ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
      <button 
        onClick={() => setIsLogged(!isLogged)} 
        style={{ padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
      >
        {isLogged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ConditionalRendering;
