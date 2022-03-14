// @flow 
import * as React from 'react';
import { Nav } from './nav';
// import styles from '../styles/Layout.module.css'
import { Personal } from './personal';
import Head from 'next/head';

type Props = {
    children: any;
};
export const Layout = (props: Props) => {
    return (
        <div className="mx-auto  flex w-full bg-contain bg-no-repeat bg-right"
                style={{ backgroundImage: "url(./right-bg-decor.png)" }}>
            <div className="w-full mx-auto max-w-screen-lg my-auto font-mono h-screen lg:overflow-y-auto hideScroll0">
                {props.children}
            </div>
        </div>
    );
};


//  {/* <Nav className="col-span-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-3xl drop-shadow-lg" /> */}
//
//