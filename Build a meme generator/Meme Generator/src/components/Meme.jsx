import memesData from "../memesData";
import React from "react";

export default function Meme() {
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className='form'>
        <div>
          <label className='form--label'>Top text</label>
          <input type='text' placeholder='Shut up' className='form--input' />
        </div>
        <div>
          <label className='form--label'>Bottom text</label>
          <input
            type='text'
            placeholder='and take my money'
            className='form--input'
          />
        </div>
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt='Image' className='meme--i' />
    </main>
  );
}
