import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Dashboard from './component/dashboard/Dashboard';
import NewInvoices from './component/dashboard/NewInvoice';
import Invoices from './component/dashboard/Invoices';
import Home from './component/dashboard/Home';
import Setting from './component/dashboard/Setting';
import InvoiceDetail from './component/dashboard/InvoiceDetail';
function App() {
  const myRouter = createBrowserRouter([
    { path: '/', element: <Login /> }, // Use 'element' instead of 'component'
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/dashboard', element: <Dashboard />,children:[
      {path:'', Component:Home},
      {path:'home', Component:Home},
      {path:'invoices', Component:Invoices},
      {path:'new-invoices', Component:NewInvoices},
      {path:'setting', Component:Setting},
      {path:'invoice-detail', Component:InvoiceDetail},
      
      

      
    ] },
  ]);

  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
