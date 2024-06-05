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


## Things Coming
- Better Styling.
- Portfolio content.
