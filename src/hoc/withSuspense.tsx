import React from 'react';
import { Suspense } from 'react';


import {Preloader} from "../components/common/preloader/Preloader";


export const withSuspense = (Component: any) => {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
    }
}

