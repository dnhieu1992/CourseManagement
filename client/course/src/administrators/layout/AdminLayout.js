import Navigation from './Navigation';
import Sidebar from './Sidebar';
import AdminRoutes from '../AdminRoutes';
import Footer from './Footer';
import { BrowserRouter as Router} from 'react-router-dom';

import './admin.css'

function AdminLayout() {
  return (
    <div className="wrapper">
      <Router>
      <Navigation />
      <Sidebar />
      <AdminRoutes />
      <Footer />
      </Router>
    </div>
  );
}
export default AdminLayout;