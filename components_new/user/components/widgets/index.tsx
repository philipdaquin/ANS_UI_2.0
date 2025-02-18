import React, { useState } from 'react';
import Poaps from './poaps';
import TabContent from './tabcontent';
import { TOP_WIDGETS, BOTTOM_WIDGETS } from '../../hackathon';
import { Res } from '../../../../src/types';
import { Divider } from '../reusables';
import {HiOutlineSearchCircle} from 'react-icons/hi'
import { CircularProgress, LinearProgress } from '@mui/material';
export interface WidgetType {
  children: any; // pass default component here
  canRender: boolean; // pass conditionals here
  loading?: boolean;
  loadingChildren?: any; // pass loading animation component here
  divider?: boolean;
}

export function Widget(props: WidgetType) {
  return (
    <>
      {props.canRender ? (
        <>
          {props.children}
          {props.divider && <Divider />}
        </>
      ): (
        <>
          {/* for loading animations */}
          {props.loadingChildren}
        </>
      )}
    </>
  )
}

export const DEFAULT_COMPONENT_LIST: WidgetType[] = [

]


export default function Widgets({arkProfile, loading}: {arkProfile: Res | undefined, loading: boolean}) {
    
  const [time, setTimeOut] = useState(false)
  React.useEffect(() => {
    setTimeout(function () {
      setTimeOut(true); 
    }, 5000);
  }, []);
  
  if (!arkProfile) return (
    <>
      {loading || time ? (
        <div className='flex items-center justify-center mt-5  flex-col space-y-2
          text-lg text-content-100/80 '>
            {/* <HiOutlineSearchCircle size={60} color="#D9D9D9"/> */}
            <h1 className='text-xl font-bold'>
              No User Information
            </h1>
            <p className='text-sm  text-gray-400'>This user has no collection, activity, poaps...</p>
        </div>
      ):(
        <div className='flex flex-col items-center justify-center space-y-2 mt-5
        text-content-100/80 '>
          <CircularProgress color="inherit" size={40}/>
          <h1 className='text-xl text-gray-400'>Retrieving user's assets</h1>
        </div>
      )}
    </>
  )
  const defaultWidgets = [
    <Widget canRender={arkProfile?.POAPS?.length > 0} loading={loading} divider={true}>
      <Poaps props={arkProfile}/>
    </Widget>,
    ...TOP_WIDGETS(arkProfile),
    <Widget canRender={!loading} divider={false}>
      <TabContent arkProfile={arkProfile} loading={loading} />
    </Widget>,
  ]
  return (
    <div className="overflow-x-hidden">
      {defaultWidgets.map((w, i) => <React.Fragment key={i}>{w}</React.Fragment>)}
    </div>
  )
}


// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { userInfo, Res } from '../../src/types';
// import { EditModal } from '../../components/editor/editmodal';
// import { UserInfo } from './components/userInfo';
// import { Bio } from './components/bio';
// import { Collectibles } from './components/widgets/content/collectibles';
// import { ArweaveActivity } from './components/widgets/content/activity';
// import { Selector } from './components/widgets/content/selector';
// // import { Divider } from './components/reusables';
// import { Sidebar } from './sidebar';
// import { Poaps } from './components/widgets/poaps';
// import CoverPage from './components/CoverPage';
// import GitPoapList from './components/widgets/gitpoaps/GitPoapList';
// import { Koii, ArweaveTransaction } from '../../src/types';
// import { arweaveTransactionHandler } from '../../src/utils';
// import { faSearch, faList } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { MagnifyingGlassIcon, ListBulletIcon } from '@heroicons/react/24/outline';
// import {BsGrid} from 'react-icons/bs'
