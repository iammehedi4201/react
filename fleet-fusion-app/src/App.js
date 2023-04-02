import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
