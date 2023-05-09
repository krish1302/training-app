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

        </>
      
    )
  }
}

export default HtmlCss