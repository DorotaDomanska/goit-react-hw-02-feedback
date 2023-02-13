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
        {options.map(option => (
          <button
            key={option}
            className={css.button}
            name={option}
            type="button"
            onClick={this.handleFeedbackOption}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
