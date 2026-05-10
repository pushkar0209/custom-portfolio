---
name: Neon-Noir Minimalism
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffffff'
  on-secondary: '#283500'
  secondary-container: '#c3f400'
  on-secondary-container: '#556d00'
  tertiary: '#fff3f3'
  on-tertiary: '#67001d'
  tertiary-container: '#ffcdd0'
  on-tertiary-container: '#be003d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#c3f400'
  secondary-fixed-dim: '#abd600'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3c4d00'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b8'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#91002d'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  grid-columns: '12'
  bento-gap: 16px
---

## Brand & Style

This design system is engineered for high-performance AI and Machine Learning environments, blending the gritty aesthetic of Neon-Noir with the hyper-functional clarity of Minimalism. The target audience—ML engineers and data scientists—requires a UI that handles immense complexity without visual fatigue, utilizing high-contrast accents to highlight critical data pathways.

The visual language centers on **Glassmorphism** and **Emissive Materials**. Surfaces are treated as semi-conductive glass panes that float above a void, with light "bleeding" from active components to simulate a hardware-centric, futuristic terminal. The emotional response is one of surgical precision, technical authority, and "hacker-ethos" sophistication.

## Colors

The palette is anchored in **Deep Obsidian (#0a0a0c)** to minimize ocular strain during long-form engineering tasks. **Electric Cyan** serves as the primary action color, representing "active data" and "processing," while **Cyber Lime** is reserved for success states, optimization metrics, and high-priority secondary highlights.

Lighting is additive. Instead of traditional shadows, components use **emissive glows** (outer glows) in Cyan or Lime to indicate state. A tertiary **Neon Magenta (#ff0055)** is used sparingly for critical errors or hardware interrupts. The background should never be pure black, but a deep, textured obsidian to allow for subtle light bleed visibility.

## Typography

Typography functions as a data-visualization tool. **Space Grotesk** is used for structural headlines to provide a high-tech, geometric rhythm. For all functional data, terminal outputs, and body text, **JetBrains Mono** provides the necessary tabular spacing and legibility required for debugging and parameter tuning.

Large display headers should utilize tighter letter-spacing to feel "industrial." All labels and secondary metadata should use JetBrains Mono in uppercase where appropriate to maintain a technical, schematic feel.

## Layout & Spacing

This design system utilizes a **Structured Bento Grid** model. Content is organized into modular "cells" that occupy fixed 3D-like depths. The layout is strictly a 12-column system for desktop, collapsing to 4 columns for mobile.

Spacing follows a strict 4px base-unit. The "Bento" layout relies on uniform gaps (16px) between glass modules to ensure the light bleed from one container does not muddle the content of the next. On desktop, large-scale data visualizations should span at least 8 columns, while parameter controls sit in 4-column sidecars.

## Elevation & Depth

Depth is conveyed through **Z-axis stacking** and **Refraction**. 
1. **Base (Z-0):** The Obsidian canvas.
2. **Surface (Z-1):** Glass panels with a 40px backdrop blur and 1px interior stroke (Electric Cyan at 10% opacity).
3. **Active (Z-2):** Elevated panels with a secondary interior glow and subtle outer drop-shadow tinted with the primary Cyan (blur 20px, spread -5px).

The "Bento" cells should appear to have 3D thickness through the use of a dual-border technique: a top-left light-tinted border and a bottom-right dark-tinted border, creating a machined-metal or thick-glass edge.

## Shapes

The shape language is "Soft-Technical." Elements use a consistent **0.25rem (4px) corner radius** to maintain a precision-machined look. Avoid large curves or circles except for status indicators (LED pips). 

Bento grid containers should maintain this sharp/soft hybrid look. Interactive elements like buttons and inputs mirror this radius, ensuring the UI feels like a single, cohesive hardware interface.

## Components

**Buttons:** Primarily ghost-style with a 1px Electric Cyan border. On hover, they fill with a 10% Cyan tint and trigger a 15px emissive outer glow.

**Cards (Bento Cells):** High-blur backdrop (40px+). Headers within cells should have a subtle bottom-border separators (0.5px) in Cyber Lime or Cyan to categorize data types.

**Input Fields:** Monospaced text entry with a "scanning" cursor animation. The border should "pulse" subtly when focused.

**Chips / Tags:** Small, rectangular labels with zero roundedness and high-contrast background fills (Electric Cyan for 'Active', Deep Grey for 'Idle').

**Data Streams:** Lists should use alternating Obsidian-tinted rows with Cyber Lime vertical "thread" lines to denote hierarchy in nested JSON or ML model structures.

**Emissive Status Pips:** Small circular indicators that use intense outer glows to show "Live" vs "Offline" states, behaving like physical LEDs on a server rack.