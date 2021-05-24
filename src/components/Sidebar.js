import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={HomeIcon} title='Principal' selected />
            <SidebarRow Icon={ExploreIcon} title='Explorar' />
            <SidebarRow Icon={SubscriptionsIcon} title='Suscripciones' />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Biblioteca' />
            <SidebarRow Icon={HistoryIcon} title='Historial' />
            <SidebarRow Icon={OndemandVideoIcon} title='Tus videos' />
            <SidebarRow Icon={WatchLaterIcon} title='Ver más tarde' />
            <SidebarRow Icon={ThumbUpAltIcon} title='Videos que me gustan' />
            <hr />
        </div>
    )
}

export default Sidebar
