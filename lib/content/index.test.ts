import { getCourse, getModule, getModuleSlugs } from './index';
import { localize } from './localize';

describe('content layer', () => {
  it('exposes a core course with four modules', () => {
    const course = getCourse();
    expect(course.id).toBe('core');
    expect(course.modules).toHaveLength(4);
  });

  it('looks up modules by slug', () => {
    expect(getModule('ebike-basics')?.slug).toBe('ebike-basics');
    expect(getModule('does-not-exist')).toBeUndefined();
  });

  it('lists module slugs', () => {
    expect(getModuleSlugs()).toEqual([
      'ebike-basics',
      'riding-safely',
      'traffic-rules',
      'real-world-scenarios',
    ]);
  });

  it('every module has lessons and quiz questions with a valid correct option', () => {
    for (const mod of getCourse().modules) {
      expect(mod.lessons.length).toBeGreaterThan(0);
      expect(mod.quiz.length).toBeGreaterThan(0);
      for (const q of mod.quiz) {
        expect(q.options.some((o) => o.id === q.correctOptionId)).toBe(true);
      }
    }
  });
});

describe('localize', () => {
  it('returns the requested locale when available', () => {
    expect(localize({ en: 'Hello', es: 'Hola' }, 'es')).toBe('Hola');
  });

  it('falls back to English when the locale is missing', () => {
    expect(localize({ en: 'Hello' }, 'it')).toBe('Hello');
  });
});
