'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('../components/Map/Map'), { ssr: false });

const Page = () => {
 
  return (
   
        <div className="flex flex-row">
          <div className='flex items-center justify-center'>
            <MyMap/>
          </div>
        </div>
    
  );
}

export default Page;
