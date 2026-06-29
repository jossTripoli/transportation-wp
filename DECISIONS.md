# Approach

## Stack Choice
I've mostly used Next.js as my react-based frontend framework but am excited to use Astro for this because it is what you've switched to and because it is SEO-friendly. I'm also going to use Tailwind CSS since it it a great system for consistent, scalable css styling classes. I will be referring to their documentation: 
https://docs.astro.build/en/concepts/why-astro/
https://www.advancedcustomfields.com/resources/

## Process

Since I haven't used astro or acf before, I'm going to start by breaking it down and doing one step at a time. I will use an agengic ai approach rather than a vibecode approach. The reason for this is that I know from experience if I tried to put everything into claude code or codex at once and "vibe code" it will be too much to review, I won't learn it properly, and I will be overwhelmed and end up with "Spaghetti" / messy code. Instead I will come up with specific system architecture and then only use ai agents to speed up the mundane tasks. One thing I will keep in mind is that because this is a headless appoach the content model lives in the wordpress database / admin ui intead of directly in the codebase and strongly typed config files like in Payload CMS. To overcome this I will expose / document the schema.

I will begin by first building the UI locally with astro following their "Get Started" guide and master the astro framework. Then I will connect it to ACF and build out the WPGraphQL fields.

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