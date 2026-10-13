---
name: Industrial Precision Workshop
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191c23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2ec'
  on-surface-variant: '#ddc1ae'
  inverse-surface: '#e0e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#a48c7a'
  outline-variant: '#564334'
  surface-tint: '#ffb77d'
  primary: '#ffb77d'
  on-primary: '#4d2600'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#904d00'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#2ab5f0'
  on-tertiary-container: '#00435d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#10131a'
  on-background: '#e0e2ec'
  surface-variant: '#32353c'
typography:
  display-hero:
    fontFamily: Barlow Condensed
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Barlow Condensed
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-action:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects raw mechanical precision, dependable technical expertise, and rugged industrial modernity. Tailored for an automotive repair workshop in the urban fabric of Valencia, the aesthetic rejects generic corporate sterility in favor of high-performance engineering cues: diagnostic readouts, chassis schematics, workshop safety markers, and heavy-duty structural layouts.

Target audiences include local drivers, fleet managers, and vehicle enthusiasts who demand absolute transparency, operational rigor, and uncompromising reliability. The interface evokes the controlled environment of a specialized pit garage—focused, legible under high glare, sturdy, and decisively functional. High-contrast tonal surfaces, tactile borders, sharp telemetry accents, and technical labeling give every component the feel of precision-machined hardware.

## Colors

The palette is rooted in dark graphite, chassis black, and high-visibility automotive warning hues.

- **Primary (`#FF8C00`)**: High-octane amber-orange used strictly for core calls-to-action, active mechanical states, telemetry highlights, and diagnostic priority notices.
- **Secondary (`#F59E0B`)**: Safety amber used for secondary badges, cautionary flags, inspection markers, and hover states.
- **Tertiary (`#38BDF8`)**: Diagnostic electric blue dedicated to technical telemetry, OBD-II data readouts, fluid levels, and digital spec indicators.
- **Neutral Core**: Built upon deep carbon foundations:
  - Base Ground: `#0F1115`
  - Elevated Container / Bay: `#171A21`
  - Interactive Panels / Structural Cards: `#1F242D`
  - Mechanical Border / Stroke: `#2E3545`
  - Active / Focus Border: `#4B5563`
- **Text & Accents**: 
  - Crisp White (`#F3F4F6`): Maximum contrast primary text and structural data values.
  - Cool Silver (`#9CA3AF`): Secondary specifications, units of measurement, and structural labels.
  - Subdued Graphite (`#6B7280`): Disabled states, inactive grid guides, and metadata stamps.

## Typography

The typographic hierarchy uses a deliberate three-tier engine:

1. **Barlow Condensed (Headlines & Section Displays)**: Delivers an assertive, industrial tone reminiscent of vehicle chassis stamps, tool chests, and tachometer numbering. Always styled with uppercase transformations on major display levels to enforce structural authority.
2. **Inter (Interface & Body)**: Provides razor-sharp legibility across digital work orders, diagnosis summaries, estimates, and customer records.
3. **JetBrains Mono (Technical Readouts & Badges)**: Deployed strictly for serial numbers, VINs, torque ratings, fault codes (DTCs), registration plates, and mechanical specs.

## Layout & Spacing

The layout is built upon an architectural 12-column fluid grid system engineered to handle dense technical data alongside high-impact customer service actions.

- **Breakpoints**:
  - `Mobile (< 768px)`: 4-column layout, compact gutters (`gutter-mobile`), minimal margin (`margin-mobile`), full-width component stacks.
  - `Tablet (768px - 1024px)`: 8-column layout, dynamic diagnostic split-screens.
  - `Desktop (> 1024px)`: 12-column layout with a maximum container bounding box of `1280px` for optimal reading lines during technical reviews.
- **Rhythm**: Layouts respect strict 4px/8px incremental multiples. Component interior spacing scales predictably from `space-xs` (tight badge padding) up to `space-xl` (section partitions and workshop bay separators).

## Elevation & Depth

Visual hierarchy is constructed through architectural tonal layering reinforced by structural 1px borders, entirely avoiding diffuse ambient dropshadows.

- **Base Floor (`#0F1115`)**: The workshop slab upon which all elements rest.
- **Structural Bay (`#171A21`)**: Raised surface container for primary modules, quote calculators, and repair timelines. Encased in a firm 1px border of `#2E3545`.
- **Active Deck (`#1F242D`)**: Interactive tooltips, floating dialogue panels, inputs, and dropdown panels. Border elevates to `#4B5563` on hover or focus.
- **Mechanical Glow**: Reserved exclusively for live status items (e.g., "Active Bay", "Diagnostic Passed", "Emergency Slot"). Created with sharp amber/orange rim lighting: `0 0 0 1px #FF8C00, 0 0 12px rgba(255, 140, 0, 0.2)`.

## Shapes

The design system implements a compact, hard-wearing corner language (`roundedness: 1`). 

- Default elements (buttons, inputs, status tags) feature tight `0.25rem` (4px) radii.
- Surface cards and diagnostic panels utilize `rounded-lg` (`0.5rem` / 8px).
- Modals, large workshop cards, and prominent hero clusters cap at `rounded-xl` (`0.75rem` / 12px).
- Radii are strictly functional: sharp enough to evoke laser-cut steel, yet gently softened to ensure modern digital ergonomics. Completely circular geometry is prohibited except for radial gauges, warning beacons, and user profile badges.

## Components

### Buttons
- **Primary Industrial**: Solid `#FF8C00` fill, `#0F1115` bold Barlow/Inter label, uppercase, 4px corner radius. Hover shifts to `#F59E0B` with subtle forward tracking. Active state scales to `0.98`.
- **Secondary Machine**: Surface `#1F242D` fill, 1px border `#2E3545`, `#F3F4F6` label. Hover renders border `#FF8C00` and text `#FF8C00`.
- **Diagnostic Ghost**: Transparent background, 1px dashed or solid border `#2E3545`, cool silver text (`#9CA3AF`). Used for secondary actions (e.g., "Descargar Informe").

### Form Inputs & Fields
- Background `#171A21` paired with a rigid 1px `#2E3545` frame.
- Text: Crisp `#F3F4F6` using `Inter` for standard input and `JetBrains Mono` for VIN, license plate (Matrícula), or date values.
- Focus State: Replaces border with solid 1px `#FF8C00` plus a 1px amber halo offset. No default browser outlines.

### Chips & Badges
- **Technical Specs / Status Chips**: `#1F242D` background, 1px border `#2E3545`, typography set in `label-code` (`JetBrains Mono`, uppercase).
- **Service Alert Badges**:
  - Urgent/Critical: Red-tinted graphite surface with `#EF4444` border and text.
  - In Progress: Amber-tinted surface with `#FF8C00` border, pulsating indicator dot.
  - Certified/Ready: Green-tinted surface with `#10B981` border.

### Cards & Work Order Containers
- Composed of `#171A21` surface, enclosed with 1px `#2E3545` perimeter.
- Top header sections feature technical striping or a 2px high-visibility amber accent line across the upper boundary to denote active repair status.
- Partition inner modules using subtle `1px solid #1F242D` dividers.

### Checkboxes & Radios
- Boxy 16x16mm appearance with a 2px border `#2E3545` on `#0F1115`.
- Selected: Background fills with `#FF8C00`, displaying an angular carbon-black checkmark or center pip.

### Workshop-Specific Components
- **Vehicle Inspection Grid**: Interactive schematics with click-to-flag hot spots highlighting tire wear, brake pad percentage, and fluid diagnostics.
- **VIN & Matrícula Plate Display**: European-standard plate frame with a deep blue country identifier block on the left and bold alphanumeric monospaced characters.