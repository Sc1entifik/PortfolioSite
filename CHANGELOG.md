# Change Log

## Version Record
### v 0.0.1
- Initial push.

### v 0.1 
- Changed project from a static site to a Node JS project. 
- Added mailer.mjs module for automating emails
- Added functioning contact form

### v 0.2
- Added projectRoutes.mjs for holding relative project routes.
- Refactored index.js to use projectRoutes.mjs to handle project endpoint routes.
- Added messageStatus field to mailer.mjs to return whether or not the contact message was successfully sent.
- Refactored index.js to get a class instance back that can both send mail and maintin message sent status.

### v 0.2.1
- Fixed POST error bug by adding new middleware step to deal with error.
- Renamed projectRoutes.mjs to projectRoutesAndMiddleware.mjs to reflect file now holds routing middleware.

### v 0.2.2
- Added CAPTCHA test however page won't route after POST request sent.
- Need to figure out CAPTCHA test routing.

### v 0.3
- Refactored code to use pug templating engine.
- Used canvas module to create CAPTCHA canvas on the backend.
- CAPTCHA test now handled fully on back end.

### v 0.3.0.1
- Spruced up css on CAPTCHA test and contact form.
- Added radio buttons via a table. 

### v 0.3.1
- Put contact form items inside a flex box.
- Got rid of the radio buttons table by using align-text: justify inside the flex box rules.
- Refactored mailer.mjs module to take req.body as a parameter instead of using a lot of constructor parameters inside a factory function.
- mailer.mjs now uses radio button parameters to customize e-mail subject field.
- Improved css

## Things Coming
- Get images to personalize website.
- Refactor projectRoutesAndMiddleware.mjs because pug configuration doesn't seem to need it much.
- Better Styling.
- Portfolio content.
