'use client';

import { useState } from 'react';
import { CTAButton } from './CTAButton';

export type QuizOptionView = { id: string; label: string };

type Props = {
  prompt: string;
  image?: string;
  options: QuizOptionView[];
  correctOptionId: string;
  explanation: string;
  labels: { check: string; next: string; correct: string; incorrect: string };
  onNext: () => void;
};

export function QuizQuestion({
  prompt,
  image,
  options,
  correctOptionId,
  explanation,
  labels,
  onNext,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = selectedId === correctOptionId;

  function answerClass(optionId: string) {
    if (!checked) {
      return selectedId === optionId ? 'answer answer--selected' : 'answer';
    }
    if (optionId === correctOptionId) return 'answer answer--correct';
    if (optionId === selectedId) return 'answer answer--incorrect';
    return 'answer';
  }

  return (
    <>
      <div className="content">
        {image ? <img className="hero-img" src={image} alt="" /> : null}
        <h2>{prompt}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={answerClass(option.id)}
              disabled={checked}
              aria-pressed={selectedId === option.id}
              onClick={() => setSelectedId(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {checked ? (
          <div className={`feedback feedback--${isCorrect ? 'correct' : 'incorrect'}`}>
            <span
              className={`feedback__label feedback__label--${isCorrect ? 'correct' : 'incorrect'}`}
            >
              {isCorrect ? labels.correct : labels.incorrect}
            </span>
            <p>{explanation}</p>
          </div>
        ) : null}
      </div>

      <div className="button-zone">
        {checked ? (
          <CTAButton onClick={onNext}>{labels.next}</CTAButton>
        ) : (
          <CTAButton onClick={() => setChecked(true)} disabled={selectedId === null}>
            {labels.check}
          </CTAButton>
        )}
      </div>
    </>
  );
}
