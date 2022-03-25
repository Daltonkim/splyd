import Layout from '../components/layout/Layout';
import { Bank } from '../modules/bank/bank';
import { Company } from '../modules/company/company';

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
        component: Company,
        layout: Layout,
        roles: [
            '*',
        ],
    },
    {
        path: '/company',
        exact: true,
        component: Company,
        layout: Layout,
        roles: [
            '*',
        ],
    },
    {
        path: '/bank',
        exact: true,
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
