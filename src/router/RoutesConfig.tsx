// import { Redirect } from 'react-router-dom';
// import ErrorsPage from "../pages/errors/ErrorsPage";
// import AuthPage from "../pages/auth/AuthPage";
// import Dashboard from "../pages/home/Dashboard";
import Layout from '../components/layout/Layout';
import { Bank } from '../modules/bank/bank';
import { Company } from '../modules/company/company';
import { Dashboard } from '../modules/dashboard/dashboard';

// Route Views
export const publicRoutes = [
    {
        path: '/auth/login',
        component: '',
        layout: Layout,
        roles: [
            'PUBLIC',
        ],
    },
    {
        path: '/404',
        component: '',
        layout: Layout,
        roles: [
            'PUBLIC',
        ],
    },
    {
        path: '/error',
        component:'',
        layout: Layout,
        roles: [
            'PUBLIC',
        ],
    },
    {
        path: '/',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: Company,
        layout: Layout,
        roles: [
            '*',
        ],
    },
    {
        path: '/company',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: Company,
        layout: Layout,
        roles: [
            '*',
        ],
    },
    {
        path: '/bank',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: Bank,
        layout: Layout,
        roles: [
            '*',
        ],
    },
    
    {
        path: '/dashboard',
        exact: true,
        component: Company,
        layout: Layout,
        roles: [
            '*',
        ],
    }
];

export const privateRoutes = [
    {
        path: '/',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: '',
        layout: Layout,
        roles: [
            '*',
        ],
    },
    {
        path: '/dashboard',
        exact: true,
        component: '',
        layout: Layout,
        roles: [
            '*',
        ],
    }
];
