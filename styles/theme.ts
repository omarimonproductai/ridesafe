/**
 * Cooltra brand tokens.
 *
 * NOTE: cooltra.com blocks automated requests (HTTP 403), so the exact brand
 * hex values could not be scraped. These are Cooltra's recognisable palette
 * (vivid green primary on a warm cream canvas, per the RideSafe design system
 * in context/saferide.md). Update the hex values here when the official brand
 * guidelines are available — every component reads these via CSS variables.
 */
export const theme = {
  colors: {
    cooltraGreen: '#00C46A',
    cooltraGreenDark: '#00A85A',
    ink: '#0A0A0A',
    cream: '#FAF4EC',
    white: '#FFFFFF',
    greyBadge: '#E8E4E5',
    greyText: '#6B6B6B',
    correct: '#1FA85A',
    incorrect: '#E5484D',
  },
  layout: {
    maxContentWidth: '800px',
    buttonHeight: '64px',
    buttonRadius: '100px',
  },
} as const;
