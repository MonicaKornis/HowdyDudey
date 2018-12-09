import React from 'react';
import ContentEditable from 'react-contenteditable'

const Sign = ({signText, changeText, font, color}) => {
  let baseCls = 'sign'
  if(font !== null) {
    baseCls += `--${font}`
  }
  
  if(color !== null) {
    baseCls += ` neon ${color}`
  }
  
  return (
    <div className='display-wrap display-color-mirrored neon white'>
      <div className='editor-text'>
        <div className='signBox'>
          <div className='signGlow'>
            <ContentEditable
                        className={baseCls}
                        html={signText} // innerHTML of the editable div
                        disabled={false}       // use true to disable editing
                        onChange={changeText} // handle innerHTML change
                        tagName='article' // Use a custom HTML tag (uses a div by default)
                      />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign;
