import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import kglOne from './assets/kglOne.jpeg'
import kglTwo from './assets/kglTwo.jpg'


const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post profilePic={kglTwo} message="This amazing" timestamp="This is a timestamp" username="WilliamDuse" image={kglOne} />
            <Post profilePic={kglTwo} message="This amazing" timestamp="This is a timestamp" username="WilliamDuse" />
        </div>
    )
}

export default Feed
