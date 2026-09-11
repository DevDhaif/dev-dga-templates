# Home page template

Extraction of the official DGA Platforms Code "Home Page Template" and its
guidelines, mapped to `@dev-dga` components. Extracted on September 5, 2026
through the Figma MCP.

## Sources

| Item            | Value                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Community file  | [Home Page Template - Platforms Code](https://www.figma.com/community/file/1412792257811427893/home-page-template-platforms-code) (key `1I4BiXyxbBfCHxVjKH8AOT`) |
| Working copy    | key `DVAzDjggmTsG810zLLStO1` (duplicated into the work account; node IDs match the original)                                                                     |
| Template page   | node `2:2`                                                                                                                                                       |
| Guidelines page | node `55:36998`                                                                                                                                                  |

## Top-level frames

| Frame                               | Node                   | Size                                     | Notes                                             |
| ----------------------------------- | ---------------------- | ---------------------------------------- | ------------------------------------------------- |
| Home Page - Desktop EN              | `4:41211`              | 1440x3083                                | Base desktop layout, no second nav header         |
| Home Page - Desktop AR              | `4:41658`              | 1440x3019                                | RTL mirror                                        |
| Home Page - Desktop EN (second nav) | `4:42975`              | 1440x3123                                | Adds the optional 40px second nav header          |
| Home Page - Desktop (sub-menu open) | `4:43415`              | 1440x3123                                | Shows the nav header sub-menu panel `4:43855`     |
| Home Page - Desktop AR (second nav) | `4:43884`, `176:9378`  | 1440x3059                                | `176:9378` has the sub-menu open                  |
| Home page - EN (mobile)             | `4:44676`              | 430x4095                                 | 16px gutters, 398px content                       |
| Home Page - AR (mobile)             | `72:46744`             | 430x3967                                 | RTL mirror                                        |
| Footer (desktop, full)              | `110:11439`            | 1440x1112                                | Six link groups plus social, accessibility, legal |
| Footer (mobile, full)               | `27:15940`, `72:46924` | 430x1609                                 | Stacked groups                                    |
| Hero Section (set)                  | `510:15676`            | RTL=No `498:8302`, RTL=Yes `510:15677`   | 1280x258 content block                            |
| Card (set)                          | `510:11618`            | RTL=No `498:8745`, RTL=Yes `510:11619`   | Service card                                      |
| News Card (set)                     | `510:11070`            | RTL=No `498:10653`, RTL=Yes `510:11071`  | 398x502                                           |
| Ai Logo (set)                       | `1698:13607`           | Default `1698:13606`, White `1698:13605` | 106x42                                            |
| DGA - logo                          | `1851:7843`            | 192x59                                   | Placeholder only in a demo                        |

Desktop content width is 1280px inside a 1440px canvas (80px gutters). Sections
stack full-bleed with alternating white and gray-50 backgrounds.

## Section inventory

Status legend: ✅ library component exists · 🧩 page-level composition of
existing components · ❌ library gap.

| #   | Section                      | Desktop (node)                      | Mobile (node)         | Anatomy                                                                                                                                                                                                                                                  | `@dev-dga` mapping                                                         | Status |
| --- | ---------------------------- | ----------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------ |
| 1   | Digital Stamp                | 1440x32 (`1209:29349`)              | 430x80 (`1209:29381`) | Green strip: "A government website registered with the Digital Government Authority. How you know?"                                                                                                                                                      | `DigitalStamp` with `extension`                                            | ✅     |
| 2   | Second Nav Header (optional) | 1440x40 (`171:7809`)                | not shown             | Utility strip: weather, date, time, city items; mic, zoom out, zoom in, view icon buttons with tooltips (guideline 3)                                                                                                                                    | `Button variant="ghost" size="icon-md"` + `Tooltip` on a gray-100 strip    | 🧩     |
| 3   | Nav Header                   | 1440x72 (`68:46095`)                | 430x72 (`4:44677`)    | Logo placeholder 154x58 + gov identifier; seven menu items with chevrons; actions: Search, language, Login; 1px bottom divider                                                                                                                           | none                                                                       | ❌     |
| 3a  | Nav Header Sub-Menu          | 1440x292 (`4:43855`)                | drawer                | Close button, `SearchBox` 1181x40 + search `Button`, suggestions row                                                                                                                                                                                     | `SearchBox` (`clearable`) + suggestions composition; mobile `SlideoutMenu` | 🧩     |
| 4   | Hero                         | 1440x491 (`4:41245`)                | 430x491 (`4:44678`)   | Image background (`4:43905`, the variant the page uses) or green gradient; title 624px column; description; `Button onColor`; 4-slide `Carousel` with dots                                                                                               | `Carousel` (`controls="dots"`) + `Button onColor`                          | ✅     |
| 5   | About us                     | 1440x428 (`37:27895`)               | 430x686 (`4:44690`)   | Title + secondary `Button`; description; four stat tiles: 56px featured icon, display value (green), label                                                                                                                                               | `Card` + `CardIcon` + `CardTitle` + `CardDescription`; 2x2 on mobile       | 🧩     |
| 6   | Services                     | 1440x560 (`498:9750`)               | 430x560 (`498:10170`) | Title + "View all"; description; `Carousel` of cards: check icon, title, text, three `Tag`s, outline + primary `Button`                                                                                                                                  | `Carousel` + `Card` + `Tag` + `Button`                                     | ✅     |
| 7   | Articles and News            | 1440x678 (`37:28861`)               | 430x822 (`4:44801`)   | Title + "View all"; description; three `News Card`s 416x478: image, two-line title, four-line text, "Read More"                                                                                                                                          | `Card` + `CardImage` + `Button`; mobile 1-up `Carousel`                    | ✅     |
| 8   | Partners                     | 1440x250 (`78:48559`)               | 430x250 (`4:44818`)   | Title; nine 117x100 bordered logo tiles; 40px square prev and next buttons                                                                                                                                                                               | `Carousel` (`controls="arrows"`) + bordered tiles                          | 🧩     |
| 9   | Feedback (last modified)     | 1440x52 (`176:9539`)                | 430x52 (`72:46920`)   | Only a right-aligned last-modified line with date and Saudi Arabia time (the guideline 7 survey is a prototype, not in the frames)                                                                                                                       | Text line (`LastModifiedSection`)                                          | 🧩     |
| 10  | Footer                       | 1440x504 (`1698:16269`, Dark green) | 430x1062 (`149:7044`) | Link groups (Overview, Important links, Contact and support), Social media, Accessibility tools; legal row: Sitemap, RSS, Mobile App (desktop only), copyright, "Developed and Maintained by", last modified date; logos (AI mark + placeholder, 106x42) | `Footer` family (1.2.0)                                                    | ✅     |

## Guidelines

Fourteen slides on the guidelines page. English slide node IDs are listed;
each has an Arabic twin.

| #   | Topic             | Node         | Rule                                                                                                                                                   | Implication                                               |
| --- | ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| 1   | Search behavior   | `62:45904`   | Auto-complete suggestions update as the user types. A clear button appears when the field has text and is keyboard accessible.                         | `SearchBox clearable` plus a suggestions list             |
| 2   | Nav header        | `62:45923`   | Detach and keep the original structure, colors, and fonts. Build a second nav header from library atoms on a token background.                         | Header is a component; second nav header is a composition |
| 3   | Second nav header | `173:8322`   | Optional. Its buttons show a tooltip naming the action on hover.                                                                                       | `Tooltip`                                                 |
| 4   | Hero              | `62:45943`   | Image backgrounds must keep image quality, text readability, and responsiveness.                                                                       | Gradient overlay on the image variant                     |
| 5   | Customize         | `94:49194`   | Pick sections from the design system as the page needs.                                                                                                | Sections are optional blocks                              |
| 6   | Swap placeholder  | `83:49044`   | Create the logo as a component and swap the footer placeholder. Match the placeholder at 125x42 px.                                                    | Logo slot with fixed box                                  |
| 7   | Feedback          | `103:49292`  | "Was this page useful?" with Yes and No is the core. Optional reasons pinpoint issues.                                                                 | Feedback widget                                           |
| 8   | Footer            | `861:9622`   | Detach and keep the structure. Show a last modified date for the page and another for the platform.                                                    | Two dates: page (above footer), platform (in footer)      |
| 9   | Footer, AI logo   | `1698:17301` | Use the Year of AI logo only in its colored or white version with clear space. As a third logo, lay out horizontally on desktop and stacked on mobile. | Logos slot with responsive direction                      |
| 10  | "View All"        | `486:8226`   | Place it near the element that implies more content, with a clear label.                                                                               | Section title row: title + action                         |
| 11  | Clickable cards   | `486:8238`   | Cards that drive an action carry a CTA button. Display-only cards can omit it.                                                                         | Service cards keep CTAs; stat tiles have none             |
| 12  | Mobile view       | `510:15753`  | With long titles, stack the button below the content. Apply the same structure in every section.                                                       | Title row wraps to a column under 480px                   |
| 13  | Digital Stamp     | `1295:9710`  | Stamp type follows the URL ending: gov.sa, med.sa, edu.sa or sch.sa, org.sa, sa. After adding the stamp at the top, remove the footer stamp.           | `DigitalStamp extension`; no stamp in footer              |
| 14  | Saudi font        | `1786:7812`  | Ministry of Culture font for national occasions, main headings only, never body text.                                                                  | Optional seasonal theme; out of scope                     |

## Library gaps

| Gap                   | SDGA source                                                                  | Scope                                                                                                                                       | Decision                           | Status (2026-09-05)                                                                 |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| `Header` (Nav Header) | Components file `To6rsl6XHfXUJbiLM2fFlf`, UI Shell "Nav Header" `429:130167` | Logo + gov identifier slot, menu items with chevron and sub-menu panel, actions slot, 72px, bottom divider, mobile menu button              | Build in the library               | ✅ `Header` family, 1.2.0                                                           |
| `Footer`              | UI Shell "Footer" `4205:18569`                                               | Link groups, social, accessibility tools, legal row, logos slot; compact (520px) and full (1112px) variants; mobile stack                   | Build in the library               | ✅ `Footer` family, 1.2.0                                                           |
| Nav Drawer            | UI Shell "Nav Drawer" `530:295832`                                           | Mobile navigation panel                                                                                                                     | Verify `SlideoutMenu` parity first | ✅ parity confirmed; `SlideoutMenuItem level` + `expanded` added                    |
| Carousel paging       | Template `498:9750`, `78:48559`, `4:44818`                                   | Fixed-width slides, gap, centered pages with edge peek, flush shell, neutral square arrows, arrow gap, overlay arrows                       | Extend in the library              | ✅ `slideSize`, `gap`, `align`, `flush`, `arrowStyle`, `arrowGap`, `arrowPlacement` |
| Stat tile             | Template `449:14952`                                                         | Centered card with a 56px featured icon                                                                                                     | Extend in the library              | ✅ `Card align="center"`, `CardIcon size="lg"`                                      |
| Frame-exact boxes     | Template `4:43884`, `72:46744`, `176:9378`                                   | Card padding inside its border, Header 72px with the divider inside, sub-menu content 1280 at 80, Chip lg icon 18, Footer template geometry | Fix in the library                 | ✅ css 1.2.0 (Card, Header, Chip, Footer compliance docs)                           |

## Verify before build (resolved 2026-09-05)

- `Carousel` with several slides per view and edge peek: library gap, closed by `slideSize` + `gap` +
  `align="center"` (pages are measured from the viewport width).
- `Carousel` arrow buttons at 40px square: the Figma arrows are neutral gray squares
  (`button-background-neutral-default`), not outline; closed by `arrowStyle="neutral"`.
- Search suggestions: the template node `4:43855` uses `Chip`s under the `SearchBox`, no popover needed.
- `Card` as a stat tile: closed by `align="center"` and `CardIcon featured size="lg"`; the display value
  and label are page content inside `CardHeader`.
- `DigitalStamp` Arabic strings: passed as props from `copy.ts` (`statement`, `triggerLabel`, domain and
  security titles and descriptions, registration label).
