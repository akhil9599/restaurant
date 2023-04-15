import React from 'react'
import Layout from '../Components/Layout/Layout'
import Banner from '../images/banner.jpeg' 
import { Link } from 'react-router-dom';
import '../Styles/homeStyle.css';



const Home = () => {
    return (
        <Layout>
            <div className="home" style={{backgroundImage:`url(${Banner})`}}>
 
                <div className="headerContainer">
                    <h1>Food Website</h1>
                    <p>Best  Food In India </p>
                    <Link to="/menu"><button>Order Now</button></Link>

                </div>
            </div>
        </Layout>
    )
}

export default Home