import React from 'react'
import PropTypes from 'prop-types'

const Segment = (prop) => (
    <div className='Segment' index={prop.index}>{
        (prop.name !== undefined) ?
            prop.name :
            React.Children.toArray(prop.children).filter((child) => {
                return typeof child === 'string'
            })
    }</div>
)

Segment.propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool
}

Segment.defaultProps = {
    selected: false
}

export default Segment