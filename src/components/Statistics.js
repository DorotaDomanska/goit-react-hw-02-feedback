import { Component } from 'react';
import css from './Counter.module.css';

export class Statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positivePercentage: this.props.positivePercentage,
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <div>
        <h3>Statistics</h3>
        <p className={css.statistics}>Good: {good}</p>
        <p className={css.statistics}>Neutral: {neutral}</p>
        <p className={css.statistics}>Bad: {bad}</p>
        <p className={css.statistics}>Total: {total}</p>
        <p className={css.statistics}>Positive Feedback: {positiveFeedback}%</p>
      </div>
    );
  }
}
