import { useState, Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();

    this.state = {
      showUsers: true,
      moreState: 'test',
    };
  }

  componentDidUpdate() {
    if (this.props.users.lenght === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    this.setState({ showUsers: false })
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
