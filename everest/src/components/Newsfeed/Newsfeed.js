import React from 'react';
import LineGraph from '../LineGraph/LineGraph';
import TimeLine from '../Timeline/Timeline';
import Article from "../Article/Article";
import './Newsfeed.css';
import Chip from '@material-ui/core/Chip';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Avatar } from "@material-ui/core";

function Newsfeed() {

    const popularTopics = [
        'Technology',
        'Top Movies',
        'Upcoming Earnings',
        'Crypto',
        'Cannabis',
        'Healthcare Supplies',
        'Index ETFs',
        'China',
        'Pharma',
    ];

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
                        <TimeLine />
                    </div>
                </div>
                <div className='newsfeed__buying__section'>
                    <h2>Buying Power</h2>
                    <h2>£2.80</h2>
                </div>
                <div className='newsfeed__market__section'>
                    <div className='newsfeed__market__box'>
                        <p>Markets Closed</p>
                        <h1>Happy Christmas</h1>
                    </div>
                </div>
                <div className='newsfeed__popularlists__section'>
                    <div className='newsfeed__popularlists__intro'>
                        <h1>Popular Lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className='newsfeed__popularlists__badges'>
                        {popularTopics.map((topic) => (
                            <Chip 
                                className="topic__badge"
                                variant="outlined"
                                label={topic}
                                avatar={<Avatar
                                src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
