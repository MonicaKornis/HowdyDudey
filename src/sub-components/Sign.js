import React from 'react';
import ContentEditable from 'react-contenteditable'

const Sign = ({signText, changeText, font, color, backing}) => {
  let baseCls = 'sign'
  let backingStyle = 'NoDisplay';

  if(font !== undefined) {
    baseCls += `--${font}`
  }

  if(color !== undefined) {
    baseCls += ` neon ${color}`
  }
  //
  if(backing == 'Outlined' || backing == 'Square') {
    backingStyle = `${baseCls} ${backing}`
  }

  if(backing == 'Square') {
    baseCls =  `${baseCls} ${backing}`;
    backingStyle = 'NoDisplay';
  }
   // debugger
  return (
  <div className=''>
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
            <div className={backingStyle} html={signText}>{signText}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sign;
