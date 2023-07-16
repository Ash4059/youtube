import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isSideBarOpen = useSelector( store => store.app.isSideBarOpen);

    return isSideBarOpen ? (
        <div className='flex flex-col px-4 font-bold text-lg border-r child:mt-4 child:flex child:flex-col'>
            <ul className='child:h-8'>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <hr />
            <ul className='child:h-8'>
                <li>Library</li>
                <li>History</li>
                <li>Your videos</li>
                <li>Watch later</li>
                <li>Liked videos</li>
                <li>Favrouite</li>
            </ul>
            <hr />
            <ul className='child:h-8'>
                <li>Subscriptions</li>
                <li>Explore</li>
                <li>More from youtube</li>
            </ul>
        </div>
    ) : null;
}

export default Sidebar