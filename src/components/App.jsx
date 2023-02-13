import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import PropTypes from 'prop-types';

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

  countPositivePercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      total > 0 ? Math.round((good / total) * 100) : 0;

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
