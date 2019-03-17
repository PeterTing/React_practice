import React from 'react'
import PropTypes from 'prop-types'
import Segment from './Segment'

const SegmentControl = (prop) => (
    <div className='SegmentControl'>
        {
            React.Children.toArray(prop.children)
                .filter((child, i) => {
                    console.log(child)
                    return child.type === Segment
                })
                .map((child, i) => (
                    React.cloneElement(child, {selected: i === prop.selectedIndex})
                ))
        }
    </div>
)

SegmentControl.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.instanceOf(Segment)),
        PropTypes.instanceOf(Segment)
    ]),
    selectedIndex: PropTypes.number.isRequired,
    indexInChanged: PropTypes.func.isRequired
}

SegmentControl.defaultProps = {
    selectedIndex: 0,
    indexInChanged: (index) => {}
}

export default SegmentControl