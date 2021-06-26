import React from 'react'
//import PropTypes from 'prop-types'

const RichTextBlock = (props) => {
    const {size,label,maxLength,backgroundColor,borderColor,borderStyle,placeholder,fontSize,color} = props.data;
    return (
        <React.Fragment>
            <label style={{ fontSize:size }}>{label}</label><br />
            <input maxLength={maxLength} placeholder={placeholder} style={{ fontSize,borderStyle,borderColor,backgroundColor,color }}/>
        </React.Fragment>
    )
}

// RichTextBlock.defaultProps = {
//     size: '30px',
//     maxLength: '5',
//     fontSize: '30px',
//     label: 'Text input',
//     backgroundColor: 'blue',
//     borderColor: 'black',
//     borderStyle: 'solid',
//     placeholder: 'Enter the text',
//     color: 'white'
// }

export default RichTextBlock;