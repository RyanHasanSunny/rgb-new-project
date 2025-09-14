import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { HelmetProvider } from 'react-helmet-async';
import Routes from './Routes';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <HelmetProvider>
      <Routes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </HelmetProvider>
  );
}

export default App;
