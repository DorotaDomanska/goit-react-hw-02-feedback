import { Component } from 'react';
import css from './Counter.module.css';

export class FeedbackOptions extends Component {
  render() {
      const { onLeaveFeedback, options } = this.props;
      
    return (
      <div>
        <h3>Please leave feedback</h3>
        <button className={css.button} name={options.good} type="button" onClick={onLeaveFeedback}>
          Good
        </button>
        <button className={css.button} name={options.neutral} type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button className={css.button} name={options.bad} type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    );
  }
}
