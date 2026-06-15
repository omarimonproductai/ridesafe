import { render, screen, fireEvent } from '@testing-library/react';
import { QuizQuestion } from './QuizQuestion';

const baseProps = {
  prompt: 'Where are the brake levers?',
  options: [
    { id: 'a', label: 'Front only' },
    { id: 'b', label: 'Both handlebars' },
  ],
  correctOptionId: 'b',
  explanation: 'One lever on each side.',
  labels: { check: 'Check', next: 'Next', correct: 'Correct', incorrect: 'Incorrect' },
};

describe('QuizQuestion', () => {
  it('keeps Check disabled until an option is selected', () => {
    render(<QuizQuestion {...baseProps} onNext={jest.fn()} />);
    expect(screen.getByText('Check')).toBeDisabled();
    fireEvent.click(screen.getByText('Both handlebars'));
    expect(screen.getByText('Check')).toBeEnabled();
  });

  it('shows correct feedback and advances on Next', () => {
    const onNext = jest.fn();
    render(<QuizQuestion {...baseProps} onNext={onNext} />);

    fireEvent.click(screen.getByText('Both handlebars'));
    fireEvent.click(screen.getByText('Check'));

    expect(screen.getByText('Correct')).toBeInTheDocument();
    expect(screen.getByText('One lever on each side.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Next'));
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('shows incorrect feedback for a wrong answer', () => {
    render(<QuizQuestion {...baseProps} onNext={jest.fn()} />);
    fireEvent.click(screen.getByText('Front only'));
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Incorrect')).toBeInTheDocument();
  });
});
