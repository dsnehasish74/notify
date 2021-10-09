import './Home.css'
import Overview from '../Overview/Overview.js';
import Profile from '../Profile/Profile'
import {useState} from 'react'
const Home=()=>{
    const [tab,setTab]=useState(2);
    return(
    <div className="dashboardPage">
        <div className="sidebar">
            <div className="top-sidebar">
                <p className="brand_name">My Notes</p>
            </div>

            <ul className="Link_list">
                <li onClick={((e)=>{
                    setTab(1);
                })}>
                    <i class="fas fa-chart-line sidebar_icon"></i>
                    Trending
                </li>
                <li onClick={((e)=>{
                    setTab(2);
                })}>
                    <div className="active">
                        <i className="fab fa-wpexplorer sidebar_icon"></i>
                        Explore.
                    </div>
                </li>
                <li onClick={((e)=>{
                    setTab(3);
                })}>
                   <i className="fas fa-clipboard sidebar_icon"></i>
                   MyNotes
                </li>
                <li onClick={((e)=>{
                    setTab(4);
                })}>
                    <i className="fas fa-star sidebar_icon"></i>
                    Favorites
                </li>
                <li onClick={((e)=>{
                    setTab(5);
                })}>
                    <i className="fas fa-upload sidebar_icon"></i>
                    Upload
                </li>
            </ul>
        </div>
        <div className="dashboard">
            <div className="dashboard_top">
                <div className="searchbar"> 
                    <i className="fas fa-search icon_search"></i>
                    <input type="text" placeholder="Search"></input>
                </div>
                <div className="profile_greeting" onClick={((e)=>{
                    setTab(6);
                })}>
                    <div className="profile_picture"><i className="fas fa-2x fa-user-circle"></i></div>
                    <p className="greetings">Hi! Snehasish</p>
                </div>
            </div>
            <div className="filter"></div>
            <div className="Overview_container">
                {
                    tab===2?<Overview/>:tab===6?<Profile/>:null}
            </div>
            
        </div>
    </div>
    );
}

export default Home;