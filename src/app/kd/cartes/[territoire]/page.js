'use client'
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('../../../../components/Map/Map'), { ssr: false });

const Page = ({ params }) => {
 
  const territoire  = params.territoire
  return (
   
        <div className="flex flex-row">
          <div className='flex items-center justify-center'>
            <MyMap departement={territoire}/>
          </div>
        </div>
    
  );
}

export default Page;
