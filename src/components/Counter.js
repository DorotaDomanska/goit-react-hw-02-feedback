import { Component } from 'react';
import css from './Counter.module.css';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleGoodFeedback = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutralFeedback = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleBadFeedback = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      positiveFeedback: (state.good / state.total) * 100,
    }));
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <div>
        <h3>Please leave feedback</h3>
        <button
          className={css.button}
          type="button"
          onClick={this.handleGoodFeedback}
        >
          Good
        </button>
        <button
          className={css.button}
          type="button"
          onClick={this.handleNeutralFeedback}
        >
          Neutral
        </button>
        <button
          className={css.button}
          type="button"
          onClick={this.handleBadFeedback}
        >
          Bad
        </button>
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
