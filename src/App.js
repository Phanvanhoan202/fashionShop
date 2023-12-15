import { createBrowserRouter, createMemoryRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { productDatas } from './api/Api';
import { Product } from './components/Product';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: productDatas,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="font-bodyFont">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
