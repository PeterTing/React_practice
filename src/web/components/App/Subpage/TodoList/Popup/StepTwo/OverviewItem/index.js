import React from 'react'

const OverviewItem = ({name, amount}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse'
        }}>{`${name + ' x ' + amount}`}</div>
    )
}

export default OverviewItem

