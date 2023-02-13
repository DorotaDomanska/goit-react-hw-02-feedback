import { Component } from 'react';
import css from './Counter.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p className={css.notification}>{message}</p>
      </div>
    );
  }
}
