import React from 'react';

const Link2 = ({route}) => {
    return (
        <p className='mr-12 font-bold rounded px-4 py-4 hover:bg-rose-900'>
            <a href={route.path}>
                {route.name}
            </a>
        </p>
    );
};

export default Link2;