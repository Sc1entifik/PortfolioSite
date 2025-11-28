## Versions

- **v-0.0.1**
    - Initial commit. Added CHANGELOG.md modified README.md.

- **v-0.1** 
    - Installed custom font configured for tailwind and added colors. 
    - Added a Sitemap Enum to hold all the routes the website will have.

- **v-0.1.5** 
    - Created LandingPageHeader functional component which sizes the header based on number of ch and font size in rem. 
    - Created InvisibleMeasurementDiv functional component to separate concerns of an invisible measurement div from the landingPageHeader.tsx responsibilites.
    - Added useCharCount.ts hook to calculate the number of border characters needed to add the border character across the screen. 
    - Adjusted font sizes for media query screen sizes in page.tsx, so menu system looks consistent no matter the font size or screen layout.

- **v-0.2** 
    - Created hook to apply routing on pages on keydown presses.

- **v-0.4** 
    - Added projects route which looks like a game selection screen loads when user presses 2 from "Main Menu" landing page.
    - Added a components directory to the projects route so that I can make the projects route render from composable components.
    - Added components for handling Title and description rendering, project image rendering, and project resources rendering towards the bottom of the page.

- **v-0.6** 
    - Composed functional components making up projects route and added media queries so the site looks good on most screen sizes. 
    - I also added custom media queries to tailwind config file.

- **v-0.6.5** 
    - Added Header For the Linkable paths which can be added to sub layouts.
    - Also added body.style.backgroundColor to page.tsx useEffect hook. 
    - Minor styling changes.

- **v-0.6.8** 
    - Modularized components in project route to improve readability and allow for experimentation.
    - Changed different element fonts and images to be controlled with clamp function instead of media queries. 
    - Added preferredRemValueAndSlope.ts utility function for finding the preferred rem values and slope vw value for the clamp function given the min and max values.
    - Page now scales better on all screen sizes.

- **v-0.7** 
    - Added projects.ts which exports the Project interface and the projects list of Project objects.
    - Created the portfolioSnapHeader.tsx element which wraps the RouteHeader element for styling and sizing purposes for the projects route. 
    - Started refactoring page.tsx by creating hooks which will separate the concerns of page.tsx moving those responsibilities to the hooks instead.

- **v-0.8**
    - Captured 4:3 ratio screenshots so pictures of projects are not cropped off or distorted.
    - Added custom hook to cause flickering effect when scrolling through projects to give the illusion that a new project "loaded".
    - The projects page looks pretty good on most screensizes. The ones that look subpar do look good on their landscape variant.

- **v-0.86** 
    - Created generateEnvFile.ts which allows you to generate the .env file with a random base 64 urlencoded string using deno generateEnvFile.ts > .env. 
    - Created generateEncryptedCaptchaString function which creates a captcha string and encrypts it in a webtoken using jose which can be decrypted safetly on the server side. 
    - Removed previously added middleware after changing data flow. 
    - Added a protected contact route that checks for an encrypted web token. 
    - If the web token checks out the contact page renders otherwise it routes you to the captcha page. Failing the captcha test will take you to the you might be a robot page. 

- **v-0.88** 
    - Created the you might be a robot page with funny robot images of robots you might be. 
    - Added ImagesMap to hold the path to all image files in the project and refactored old code to use it.
    - Removed troubleshooting lines causing small errors. 

- **v-0.90** 
    - Added FF7 style contact forms. Added backgroundImage: ff7-menu to tailwind.donfig to create linear-gradiant text boxes for forms.
    - I added a use client version of page.tsx due to needing to pass state setters to form functions. 
    - Created contact radio form. 
    - Added new sub components in the contact route and a component sub directory for all of the components to live. 
    - Created a Hooks sub directory for the contact comonents. 
    - Added a custom soundEffect and custom rpgMusic hook. 
    - Added sound effect for radio button change.
    - Added rpg inspired theme music to play in background of menu. 
    - Revamped CHANGELOG.md
    - Made user input form elements inside the contact/components route.
    - Added audioCredits.tsx element inside contact/components to show audioCredits on ffContactForm.tsx
    - Renamed imagesMap.ts to mediaMap.ts and added music and sound effects links there as well. 
    - Added emailUserMessage.ts server action in contact/components/serverActions to email myself the filled out user form from the end user.

- **v-0.93**
    - Created contact/formProcess subroutes which will handle the form routing logic for the project. 
    - Added messageSuccess.tsx FC to render the message success message.
    - Installed jose because web app was using global instance.
    - Added messageFailure.tsx FC to render the message failure message.
    - Updated MessageSuccess.tsx to play a confirmation sound when the page renders and also when the user clicks the ok button.

- **v-0.95**
    - Added allowedDevOrigins to add the dev server IP to quiet error warnings in Dev mode
    - Added loading="eager" and unoptimized to the crtImage.tsx Image tag to improve performance on projects.tsx route.


## Bug Fixes:

- **Descendant Of P Bug In Description:** When refactoring my code to the functional components in the projectDetails directory I accidentally split a paragraph inside a paragraph tag because the text was injected, and it needed to be split. I found why it wasn't split due to the difference between how the text is now supplied to it's FC and how it used to be supplied. I removed the faulty split and added the correct split in projectDetails.tsx fixing this bug.

- **Crt Image Hover Cut Off:** Once I refactored the projects route to render a list of projectSnapElements the transformation of the top element got cut off by the header element above it. After much toiling and troubleshooting with ChatGPT I discovered that the issue was because the top of the scroll container was cutting off the expanded image when the transformation triggered on hover. To fix this I added the transformationOrigin parameter to the crtImage.tsx functional component. This allowed me to change the transformationOrigin of the top project image to top right. This transforms it away from the edge and allows the scrolling and transformations to work as intended.

- **Projects Navigation Runtime Error:** When navigating to or away from the Projects page via the <Link> tags the useScrollTransition custom hook triggered a runtime error. I eliminated this by using ? operator instead of ! everywhere it called scrollRef.current ! in that hook.
