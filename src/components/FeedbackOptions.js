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
    console.log(options[0]);

    return (
      <div>
        <button
          className={css.button}
          name={options[0]}
          type="button"
          onClick={this.handleFeedbackOption}
        >
          Good
        </button>
        <button
          className={css.button}
          name={options[1]}
          type="button"
          onClick={this.handleFeedbackOption}
        >
          Neutral
        </button>
        <button
          className={css.button}
          name={options[2]}
          type="button"
          onClick={this.handleFeedbackOption}
        >
          Bad
        </button>
      </div>
    );
  }
}
