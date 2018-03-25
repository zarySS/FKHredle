import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <title>
                {this.props.value}
            </title>
        )
    }
}