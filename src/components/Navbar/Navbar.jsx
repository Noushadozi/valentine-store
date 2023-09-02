import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar2 = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Product',
            path: '/product'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];
    return (
        <nav className='bg-rose-400 py-5'>
            <div className='md:hidden' onClick={() => setOpen(!open)}
            ><span>
                {open ?
                <XMarkIcon className='h-6 w-6 text-blue-500'></XMarkIcon> :
                <Bars3Icon className='h-6 w-6 text-blue-500'></Bars3Icon>
                }
            </span>
            </div>

            <ul className={`pl-12 bg-rose-400 md:flex duration-500 md:static lg:static absolute ${open ? 'top-10' : '-top-[260px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar2;