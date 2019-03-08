import React from 'react'
import { connect } from 'react-redux'

import SideBar from '../components/App/Subcomponent/SideBar'
import changePage from '../actions'

function mapDispatchToProps(dispatch) {
    return {
        onClick: page => {
            dispatch(changePage(page))
        }
    }
}

const ListItemAction = connect(mapDispatchToProps)(SideBar)