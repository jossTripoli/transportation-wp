# Approach

## Stack Choice
I've mostly used Next.js as my react-based frontend framework but am excited to use Astro for this because it is what you've switched to and because it is SEO-friendly. I'm going to use Tailwind CSS since it it a great system for consistent, scalable css styling classes. Because of this choice, I will be using styling everything using a mobile-first approach as that is how the tailwind css is setup and its great for modern web development and prioritizing essential content and functionality. I will also be using shadcn/ui or flowbite free component libraries built with tailwind css for making features like the tabs and accordians to efficiently complete these without having to reinvent the wheel. I will be referring to their documentation: 
https://docs.astro.build/en/concepts/why-astro/
https://www.advancedcustomfields.com/resources/
https://tailwindcss.com/plus/ui-blocks/documentation
https://ui.shadcn.com/docs

## Process

Since I haven't used astro or acf before, I'm going to start by breaking it down and doing one step at a time. I will use an agengic ai approach rather than a vibecode approach. The reason for this is that I know from experience if I tried to put everything into claude code or codex at once and "vibe code" it will be too much to review, I won't learn it properly, and I will be overwhelmed and end up with "Spaghetti" / messy code. Instead I will come up with specific system architecture and then only use ai agents to speed up the mundane tasks. One thing I will keep in mind is that because this is a headless appoach the content model lives in the wordpress database / admin ui intead of directly in the codebase and strongly typed config files like in Payload CMS. To overcome this I will expose / document the schema. *update after looking info acf they have a local JSON feature to do this I will use: https://www.advancedcustomfields.com/resources/local-json/

I will begin by first building the UI locally with astro following their "Get Started" guide, create mock data instead of hardcoded so its easier to convert from dev to production, and then build out the page. Then I will connect it to ACF and build out the WPGraphQL fields.

## Building the UI

First I set up the project. I read in their documentation astro supports npm, pnpm, and yarn. I'm choosing to use pnpm as my package manager as it offers the fastest insallation speeds. So I ran in the terminal `pnpm create astro@latest` and `pnpm install`. I set it up with a git repository, react, and tailwind css by installing using the terminal again (`pnpm add @astrojs/react react react-dom tailwindcss @tailwindcss/vite`) then adding to asto.config.mjs. In interesting discovery I had was that Astro is built on top of Vite by Evan You who also built Vue.js. And because of this they have features like hot reload and production build optimization which sounds great. Because I'm realising the there's going to be a lot of frontend dependencies I will note that they will need to be updated regularly, and dependency scans should be part of the development workflow. Pnpm includes an audit command that can be used alongside GitHub security alerts to help identify newly discovered vulnerabilities in frontend dependencies.

After getting react / tailwind installed I created a global style sheet at src/styles and imported tailwind.

To create the data mockup data I created a typescript file at data/mock.tc and used codex giving it the extracted text from the figma to quickly create this with out having to manually copy and paste everything. I reviewed the data it generated and found it used the same lorem ipsum so reprompted to fix this.

Next I ran it in development mode using `pnpm dev` and went to `http://localhost:4321/` and can see that everything was installed correctly as the astro greeting page loaded with no errors in the inspect element web browser terminal or vs code dev terminal. 

Now to start developing the UI I went to the default starter page at src/pages/index.astro. I noticed my IDE didn't have sytax highlighting so I installed the official astro vs code IDE extension. I'm starting with updating the global styling to use the provided font. I added the static resources including the font files to public/fonts and then the images to public/images (I renamed folder as this is the standard naming convention istead of 'images-and-icons'). I also removed all the astro welcome page stuff.

I split the Figma into focused components based on each feature so it will be easy to scale, reuse, and integrate to wordpress ACF. I created a folder I'm calling hero/impact since this is the standard way to describe the main landing page with call the actions and sets it up so later the medium and low impact pages and be added cleanly. I created a types.ts with structure of what data will be used on the page. Then I created an outline for each one and then used agentic ai to generate an initial prototype of each feature which I then cleaned up. I found that the shadcn / flowbite tabs and accordian components were too far away from what was needed so I pivoted and made custom components for these. Another change I made was making the images have less height / be more rectangle than square. I decided this because then the layout is able to fit the cta buttons on the page without scrolling for a much larger variety of desktop screens.

### `TransportationSection.tsx`

This is the main parent component for the entire homepage section. It owns the interactive state for:

- the active main category tab
- the active subcategory / open accordion item

It also decides which layout pieces render on desktop versus mobile. I kept the state here because the category tabs, desktop panel, and mobile accordion all need to stay synchronized. When the user switches from `Experience` to `We Care` or `Safety`, the active subcategory resets to the first item in that category so the UI never shows mismatched content.

### `CategoryTabs.tsx`

This component renders the top-level category tabs:

- `Experience`
- `We Care`
- `Safety`

These are buttons rather than links because they change content inside the same page instead of navigating to separate pages. I separated this component because the same category tab UI is used in both desktop and mobile placements, but the behavior is shared.

### `HeroHeading.tsx`

This component renders the high-impact heading and intro copy from the mockup:

- `THE ABC`
- `Transportation`
- active category label such as `EXPERIENCE`, `WE CARE`, or `SAFETY`
- the short intro paragraph

I separated this as its own component because it is the main brand/message area of the design. It is also likely to be directly mapped to editable ACF fields later. Keeping it isolated makes it easier to preserve the typography, font choices, spacing, and responsive alignment.

### `DesktopSubcategoryTabs.tsx`

This component renders the left-side desktop subcategory list. On desktop, the subcategories behave like vertical tabs. Selecting one updates the active content on the right side of the section.

For example, under `Experience`, the desktop subcategory tabs are:

- `Comprehensive Driver Clearances`
- `Real-Time GPS Tracking & Monitoring`
- `In-House Maintenance & Safety Options`
- `Wheelchair-Accessible Vehicles`

I separated this from the main category tabs because it is a different level of navigation. The category tabs switch the whole content group, while the subcategory tabs switch the content within that group.

### `DesktopContentPanel.tsx`

This component renders the desktop active content area:

- the active subcategory image
- the active subcategory heading
- the active subcategory body text
- the CTA buttons

This maps directly to the right side of the desktop Figma mockup. I kept it separate so the content presentation is not mixed with the tab navigation logic. It also makes the later WordPress integration cleaner because each subcategory can provide its own image, alt text, heading, and body copy.

### `MobileAccordion.tsx`

This component renders the mobile version of the subcategories. On mobile, the brief says the subcategories should become accordions, so the desktop vertical tab list is replaced with a stacked accordion layout.

Only one accordion item is open at a time. This keeps the mobile experience focused and prevents the page from becoming too long or visually overwhelming. The open accordion item shows the heading, body text, and CTA buttons close together so users can take action after reading the relevant content.

### `CtaButtons.tsx`

This component renders the two reusable conversion links:

- `Get a Quote`
- `Book Online`

I separated the CTA buttons because they appear in both the desktop content panel and the mobile accordion. The brief also states that these links should be the same throughout the component, so they should be stored once in the data model and reused everywhere. This will make the ACF setup simpler because the client only needs to update each CTA link in one place.

Next I went through and replaced all the placeholder static assets with the real image and icon assets. 

## Suggested Improvements

For the implementation, I prioritized matching the provided Figma mockup as closely as possible because the goal of the assignment is to translate the approved design into a working headless WordPress component.

I will note here my recommendations for a real transportation business website to improve conversions and ui/ux experience.

- On mobile I would suggest making the CTA buttons visible earlier so user doesn't have to scroll past info / accordian. Especially for returning users who are on the go and just want to quickly book

## WordPress / ACF Structure
How content is editable from WordPress.

## Headless Data Fetching
How the frontend gets content from WordPress.

## Responsive Behavior
Tabs on desktop, accordions on mobile.

## SEO Considerations
Static rendering, semantic HTML, image alt text, headings.

## Assumptions
Any choices made because the brief left details open.