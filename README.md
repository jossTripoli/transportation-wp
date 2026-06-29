# Approach

## Stack Choice
I've mostly used Next.js as my react-based frontend framework but am excited to use Astro for this because it is what you've switched to and because it is SEO-friendly. I'm going to use Tailwind CSS since it it a great system for consistent, scalable css styling classes. I will also be using shadcn/ui or flowbite free component libraries built with tailwind css for making features like the tabs and accordians to efficiently complete these without having to reinvent the wheel. I will be referring to their documentation: 
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