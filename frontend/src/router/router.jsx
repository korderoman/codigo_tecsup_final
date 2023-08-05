import * as React  from "react";
import {createBrowserRouter} from "react-router-dom";
const  Landing =React.lazy(()=> import("../pages/landing/Landing.jsx"));
const  Contact = React.lazy(()=>import("../pages/contact/Contact.jsx"));
const News = React.lazy(()=>import("../pages/news/News.jsx"));
const Admin = React.lazy(()=>import("../pages/admin/Admin.jsx"));
import Layout from "../layout/Layout.jsx";
import Loading from "@components/loading/Loading.jsx";
const Documents = React.lazy(()=>import("../pages/documents/Documents.jsx"));
const Post = React.lazy(()=>import("../shared/components/post/Post.jsx"));
const Dashboard = React.lazy(()=>import("../pages/dashboard/Dashboard.jsx"));
const Comments = React.lazy(()=>import("../pages/dashboard/comments/Comments.jsx"));
const Media = React.lazy(()=>import("../pages/dashboard/media/Media.jsx"));
const Posts  = React.lazy(()=>import( "../pages/dashboard/posts/Posts.jsx"));
const Tools  = React.lazy(()=>import( "../pages/dashboard/tools/Tools.jsx"));
const Pages  = React.lazy(()=>import( "../pages/dashboard/pages/Pages.jsx"));
const Upload = React.lazy(()=>import( "../pages/dashboard/upload/Upload.jsx"));
// rutas anidadas: https://reactrouter.com/en/main/start/tutorial#nested-routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <Landing/>
                    </React.Suspense>
,
            },
            {
                path:'home',
                element: <React.Suspense fallback={<Loading/>}>
                    <Landing/>
                </React.Suspense>
            },
            {
                path:'contact',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <Contact/>
                    </React.Suspense>
            },
            {
                path:'news',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <News/>
                    </React.Suspense>

            },
            {
                path:'wp-admin',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <Admin/>
                    </React.Suspense>
            },
            {
                path:'documents',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <Documents/>
                    </React.Suspense>
            },
            {
                path:'post/:id',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <Post/>
                    </React.Suspense>
            }
        ],


    },
    {
        path:'dashboard',
        element:
            <React.Suspense fallback={<Loading/>}>
                <Dashboard/>
            </React.Suspense>
            ,
        children:[
            {
                path: 'comments',
                element:
                    <React.Suspense fallback={<Loading/>}>
                        <Comments/>
                    </React.Suspense>
            },
            {
                path: 'media',
                element: <React.Suspense fallback={<Loading/>}>
                    <Media/>
                </React.Suspense>,
            },
            {
              path: 'pages',
              element: <React.Suspense fallback={<Loading/>}>
                  <Pages/>
              </React.Suspense>
            },
            {
                path: 'posts',
                element: <React.Suspense fallback={<Loading/>}>
                    <Posts/>
                </React.Suspense>
            },
            {
                path: 'tools',
                element: <React.Suspense fallback={<Loading/>}>
                    <Tools/>
                </React.Suspense>
            },
            {
                path: 'upload',
                element:<React.Suspense fallback={<Loading/>}>
                    <Upload/>
                </React.Suspense>
            }
        ]
    }

]);

export  default router;
