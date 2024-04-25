import React from 'react'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'
import './ReviewForm.css'

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input type="radio" value="unsatisfield" name="review" 
            required
            checked= {data.review === "unsatisfield"}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input type="radio" value="neutral" name="review"  checked={data.review === "neutral"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiNeutralFill/>
          <p>Podeia ser melhor</p>
        </label>
        <label className='radio-container'>
          <input type="radio" value="satisfield" name="review"  checked={data.review === "satisfield"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiSmileFill/>
          <p>Bom</p>
        </label>
        <label className='radio-container'>
          <input type="radio" value="very_satisfield" name="review"  checked={data.review === "very_satisfield"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiHeartEyesFill/>
          <p>Muito bom</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='Conte como foi a sua experiência com o produto' required value={data.comment } onChange={(e) => updateFieldHandler("comment", e.target.value)}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm