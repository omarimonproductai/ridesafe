/**
 * Cooltra brand tokens — from the official Brand Look & Feel guidelines.
 *
 * Colour rules (enforced across the UI):
 * - Blue is primary. White text on blue; blue titles + dark body on white.
 * - Green is ACCENT ONLY (icons, highlights, dividers) — never used for text.
 * - Orange is warning/highlight only.
 * - No colours outside this palette.
 */
export const theme = {
  colors: {
    cooltraBlue: '#008aff', // primary
    darkBlue: '#052f62', // secondary bg, cards, dark text
    deepBlue: '#063063', // darkest elements
    accentGreen: '#05e100', // accent only — never text
    white: '#feffff',
    lightBlue: '#8ec8ff', // subtle backgrounds, secondary cards
    orange: '#ec6e24', // warning / highlight only
    ink: '#0a0a0a', // body text on white
  },
  font: {
    family: "'CooltraGilroy', Arial, sans-serif",
  },
  layout: {
    maxContentWidth: '800px',
    buttonHeight: '64px',
    buttonRadius: '100px',
  },
} as const;
