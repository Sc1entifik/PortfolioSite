##Versions
- v-0.0.1 - Initial commit. Added CHANGELOG.md modified README.md.
- v-0.1 - Installed custom font configured for tailwind and added colors. Added a Sitemap Enum to hold all the routes the website will have.
- v-0.1.5 - Created LandingPageHeader functional component which sizes the header based on number of ch and font size in rem. Created InvisibleMeasurementDiv functional component to separate concerns of an invisible measurement div from the landingPageHeader.tsx responsibilites. Added useCharCount.ts hook to calculate the number of border characters needed to add the border character across the screen. Adjusted font sizes for media query screen sizes in page.tsx, so menu system looks consistent no matter the font size or screen layout.
- v-0.2 - Created hook to apply routing on pages on keydown presses.
- v-0.4 - Added projects route which looks like a game selection screen loads when user presses 2 from "Main Menu" landing page. Added a components folder to the projects route so that I can make the projects route render from composable components. Added components for handling Title and description rendering, project image rendering, and project resources rendering towards the bottom of the page.
- v-0.6 - Composed functional components making up projects route and added media queries so the site looks good on most screen sizes. I also added custom media queries to tailwind config file.
- v-0.6.5 - Added Header For the Linkable paths which can be added to sub layouts. Also added body.style.backgroundColor to page.tsx useEffect hook. Minor styling changes.
- v-0.6.8 - Modularized components in project route to improve readability and allow for experimentation. Changed different element fonts and images to be controlled with clamp function instead of media queries. Added preferredRemValueAndSlope.ts utility function for finding the preferred rem values and slope vw value for the clamp function given the min and max values. Page now scales better on all screen sizes.
- v-0.7 - Added projects.ts which exports the Project interface and the projects list of Project objects. Created the portfolioSnapHeader.tsx element which wraps the RouteHeader element for styling and sizing purposes for the projects route. Started refactoring page.tsx by creating hooks which will separate the concerns of page.tsx moving those responsibilities to the hooks instead.
- v-0.8 - Captured 4:3 ratio screenshots so pictures of projects are not cropped off or distorted. Added custom hook to cause flickering effect when scrolling through projects to give the illusion that a new project "loaded". The projects page looks pretty good on most screensizes. The ones that look subpar do good do look good on their landscape variant.
- v-0.82 - Created generateEnvFile.ts which allows you to generate the .env file with a random base 64 urlencoded string using deno generateEnvFile.ts > .env. 


Bug Fixes:

- P Descendant Of P Bug In Description: When refactoring I accidentally split a paragraph inside a paragraph tag because the text was injected, and it needed to be split. I found where it was supposed to be split and why it wasn't split due to a prior refactor. I removed the faulty split and added the correct split in projectDetails.tsx fixing this bug.

- Crt Image Hover Cut Off - Once the projects got refactored into a list of projectSnapElements the transformation of the top element got cutt off by the header element above it. After toiling with this for some time with z-indexes, divs, and sub-divs, and troubleshooting with GPT it was discovered that the issue was because the top of the scroll container was cutting off the expanded image when the transformation triggered on hover. To fix this I added the transformationOrigin parameter to the crtImage.tsx functional component. This allowed me to change the transformationOrigin of the top project image to top right. This scrolls it away from the edge and allows the scrolling and transformations to work as intended.


