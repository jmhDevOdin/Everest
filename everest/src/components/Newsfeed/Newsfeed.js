import React from 'react';
import LineGraph from '../LineGraph/LineGraph';
import './Newsfeed.css';

function Newsfeed() {
    return (
        <div className='newsfeed'>
            <div className='newsfeed__container'>
                <div className='newsfeed__chartSection'>
                    <div className='newsfeed__portfolio'>
                        <h1>£85,025.76</h1>
                        <p>+£115.36 (+0.04%) Today</p>
                    </div>
                    <div className='newsfeed__chart'>
                        <LineGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
