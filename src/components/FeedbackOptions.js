import { Component } from 'react';
import css from './Counter.module.css';

export class FeedbackOptions extends Component {
  handleFeedbackOption = evt => {
    const { onLeaveFeedback } = this.props;
    const { name } = evt.target;

    onLeaveFeedback(name);
  };

  render() {
    const { options } = this.props;

    return (
      <div>
        <h3>Please leave feedback</h3>
        <button
          className={css.button}
          name={options.good}
          type="button"
          onClick={this.handleFeedbackOption}
        >
          Good
        </button>
        <button
          className={css.button}
          name={options.neutral}
          type="button"
          onClick={this.handleFeedbackOption}
        >
          Neutral
        </button>
        <button
          className={css.button}
          name={options.bad}
          type="button"
          onClick={this.handleFeedbackOption}
        >
          Bad
        </button>
      </div>
    );
  }
}
