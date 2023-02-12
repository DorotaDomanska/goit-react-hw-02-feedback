import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  handleFeedback = name => {
    switch (name) {
      case 'good':
        this.handleGoodFeedback();
        break;

      case 'neutral':
        this.handleNeutralFeedback();
        break;

      default:
        this.handleBadFeedback();
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        ></Statistics>
      </div>
    );
  }
}
