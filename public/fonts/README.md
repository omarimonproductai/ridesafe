# Cooltra brand fonts

The UI is set in **CooltraGilroy** (Regular / SemiBold / ExtraBold), with **Arial**
as the fallback (per the brand guidelines — never use the old "Gilroy").

The font files are **not** committed here. To enable the brand font, add these
`.woff2` files to this folder:

- `CooltraGilroy-Regular.woff2`
- `CooltraGilroy-SemiBold.woff2`
- `CooltraGilroy-ExtraBold.woff2`

Source: https://github.com/agonzalez-cooltra/CooltraFonts

The `@font-face` declarations are already wired up in `styles/globals.css`. Until the
files are present, the app renders in Arial.
