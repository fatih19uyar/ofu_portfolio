import { useState, useEffect } from 'react';
import './index.css';
import Login from './pages/Login/Login';
import LoadingScreen from './pages/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 saniye sonra loading'i false yap

    return () => clearTimeout(timer); // Unmount edildiğinde timer'ı temizle
  }, []);

  return (
    <>
      {loading ? <LoadingScreen/> : <Login />}
    </>
  );
}

export default App;