import React, { Component } from 'react'
import './HtmlCss.css'

class HtmlCss extends Component {
  render() {
    return (
        <>
            <h1>Heading</h1><br></br>
            <div className='head-div'>Div</div>

            {/* position */}
            <div className='pos-relative'>
                <div className='pos-absolute'>
                1
                </div>
                <div className='pos-absolute'>
                2
                </div>
                <div className='pos-absolute'>
                3
                </div>
                <div className='pos-absolute'>
                4
                </div>
            </div>

            {/* display */}
            <div className='dis-flex'>
              <div className='box'>box 1</div>
              <div className='box'>box 2</div>
              <div className='box'>box 3</div>
              <div className='box'>box 4</div>
            </div>


            <div className='dis-flex-1'>
              <div className='dis-flex-2'>
                <div className='box'>box 1</div>
                <div className='box'>box 2</div>
                <div className='box'>box 3</div>
                <div className='box'>box 4</div>
              </div>
              <div className='dis-flex-3'>
              <div className='box'>box 1</div>
                <div className='box'>box 2</div>
                <div className='box'>box 3</div>
                <div className='box'>box 4</div>
              </div>
            </div>


            <div className='dis-grid'>
                <div className='box'>box 1</div>
                <div className='box'>box 2</div>
                <div className='box'>box 3</div>
                <div className='box'>box 4</div>
                <div className='box'>box 5</div>
                <div className='box'>box 6</div>
                <div className='box'>box 7</div>
            </div>

        </>
      
    )
  }
}

export default HtmlCss