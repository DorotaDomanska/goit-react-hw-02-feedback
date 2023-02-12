import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class Section extends Component {
  render() {
    const { options, onLeaveFeedback, good, neutral, bad, total, positivePercentage } =
      this.props;

    return (
      <div>
        <h3>Please leave feedback</h3>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
        <h3>Statistics</h3>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      </div>
    );
  }
}
