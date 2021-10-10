import './Home.css'
import Overview from '../Overview/Overview.js';
import Profile from '../Profile/Profile'
import MyNotes from '../MyNotes/MyNotes'
import Upload from '../Upload/Upload'
import Signup from '../Signup/Signup'
import {useState,useEffect,useLayoutEffect } from 'react'
import {auth,provider} from '../../firebase.js'
import Loader from '../Loader/Loader'
const Home=()=>{
    const [tab,setTab]=useState(2);
    const [isLoaded,setIsLoaded]=useState(<Loader />);
    useEffect(()=>{
        if (auth.currentUser) {
            setIsLoaded(null);
        }
    })

    useLayoutEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setIsLoaded(<Loader />);
      else setIsLoaded(<Signup />);
    });
  }, []);
    if (isLoaded) return isLoaded;
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
                <div className={tab==1?"active":""}>

                    <i className="fas fa-chart-line sidebar_icon"></i>
                    Trending
                </div>
                </li>
                <li onClick={((e)=>{
                    setTab(2);
                })}>
                    <div className={tab==2?"active":""}>
                        <i className="fab fa-wpexplorer sidebar_icon"></i>
                        Explore
                    </div>
                </li>
                <li onClick={((e)=>{
                    setTab(3);
                })}>
                <div className={tab==3?"active":""}>

                   <i className="fas fa-clipboard sidebar_icon"></i>
                   My Notes
                   </div>
                </li>
                <li onClick={((e)=>{
                    setTab(4);
                })}>
                <div className={tab==4?"active":""}>

                    <i className="fas fa-star sidebar_icon"></i>
                    Favorites
                    </div>
                </li>
                <li onClick={((e)=>{
                    setTab(5);
                })}>
                <div className={tab==5?"active":""}>

                    <i className="fas fa-upload sidebar_icon"></i>
                    Upload

                    </div>
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
                    <p className="greetings" styele={{color: "#808080"}}>Hi! Snehasish</p>
                </div>
            </div>
            <div className="filter"></div>
            <div className="Overview_container">
                {
                    tab===2?<Overview/>:tab===6?<Profile/>:tab===5?<Upload/>:tab===3?<MyNotes/>:null}
            </div>
            
        </div>
    </div>
    );
}

export default Home;