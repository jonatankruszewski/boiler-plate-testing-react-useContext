import './App.css';
import AuthProvider from './context/AuthProvider';
import Welcome from './components/Welcome';

function App() {
  return (
    <AuthProvider>
      <Welcome />
    </AuthProvider>
  );
}

export default App;

