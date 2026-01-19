import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './Components/AuthLayout'

import Home from './Components/pages/Home'
import Login from './Components/pages/Login'
import Signup from './Components/pages/Signup'
import Post from './Components/pages/Post'
import AddPost from './Components/pages/AddPost'
import EditPost from './Components/pages/EditPost'
import AllPosts from './Components/pages/AllPosts'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                )
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                )
            },
            {
                path: "/all-posts",
                children: (
                    <AuthLayout authentication={true}>
                        <AllPosts />
                    </AuthLayout>
                )

            },
            {
                path: "/add-post",
                children: (
                    <AuthLayout authentication={true}>
                        <AddPost />
                    </AuthLayout>
                )
            },
            {
                path: "/edit-post/:slug",
                children: (
                    <AuthLayout authentication={true}>
                        <EditPost />
                    </AuthLayout>
                )
            },
            {
                path: "/post/:slug",
                children: <Post />
            }

        ]
    }
])

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>

    </StrictMode>


);
