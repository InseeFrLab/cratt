'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MiniDrawer from '@/components/Sidebar/Bar';

const MyMap = dynamic(() => import('../components/Map/Map'), { ssr: false });

const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <MiniDrawer open={drawerOpen} onOpen={() => setDrawerOpen(true)} onClose={() => setDrawerOpen(false)} />
      <div style={{ flexGrow: 1, paddingLeft: drawerOpen ? 240 : 0, transition: 'padding-left 0.3s ease' }}>
        <div className="flex flex-row">
          <div className='flex items-center justify-center'>
            <MyMap/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
