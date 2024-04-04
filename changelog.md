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


## Things Coming
- Fixing the POST error handling bug I am currently dealing with. 
