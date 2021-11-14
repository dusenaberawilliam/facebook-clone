import React from 'react'
import Story from './Story'
import './StoryReel.css'
import kglOne from './assets/kglOne.jpeg'
import kglTwo from './assets/kglTwo.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story image={kglOne} profileSrc={kglTwo} title="William" />
            <Story image={kglOne} profileSrc={kglTwo} title="Willy" />
            <Story image={kglOne} profileSrc={kglTwo} title="William" />
            <Story image={kglOne} profileSrc={kglTwo} title="Duse" />
            <Story image={kglOne} profileSrc={kglTwo} title="William" />
            <Story image={kglOne} profileSrc={kglTwo} title="William" />
        </div>
    )
}

export default StoryReel
