import { Layout } from 'antd';
import Navbar from './components/Nav/Navbar';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Dashboard />
    </Layout>
  );
};

export default App;
