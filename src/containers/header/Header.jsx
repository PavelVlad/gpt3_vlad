import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
          <p>Only on them C's if it's breeze, Red Ruby Da Sleeze Chinese on my sleeve, these wannabe Chun-Lis Anyway, nǐ hǎo (nǐ hǎo). Bad gyal don't die-die-die (brrt) (die-die)Hundred rounds on dat, grrah-ta-ta (grrah-ta-ta-ta) Real one lick a shot-ta-ta (baow) She my lil' vibe, my lil' ah-ah-ah (my lil' ahh) Bad gyal don't run from nobody like, ah (ooh) Rude boy want me touchin' on his body like, yeah (ooh) Boy haffi dead if he ever diss me You know what to do if he ever miss me, yeah</p>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='People'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
        </div>

      </div>
    </div>
  )
}

export default Header