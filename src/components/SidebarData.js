import React from 'react';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpIcon from '@material-ui/icons/Help';
export const SidebarData=[
{
    icon:<FilterHdrIcon/>,
    link:'/dashboard'
},
{
    icon:<HomeIcon/>,
    link:'/dashboard'
},
{
    icon:<FavoriteBorderIcon/>,
    link:'/fav'
},
{
    icon:<PersonOutlineIcon/>,
    link:'/profile'
},
{
    icon:<NotificationsNoneIcon/>,
    link:'/notifications'
},
{
    icon:<SettingsOutlinedIcon/>,
    link:'/settings'
},
{
    icon:<HelpIcon/>,
    link:'/help'
}


]