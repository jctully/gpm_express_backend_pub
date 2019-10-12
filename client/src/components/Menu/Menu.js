import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='forms'
            active={activeItem === 'forms'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='progress'
            active={activeItem === 'progress'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
