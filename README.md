# Indiana Trails

Indiana Trails is a hiking website focused on exploring outdoor destinations throughout Indiana. The site allows users to browse featured trails, view hiking information, sign in through a modal form, and receive feedback through reusable toast notifications.

## Features

* Dynamic page navigation using URL hash routing
* Home page with featured Indiana hiking destinations
* Trails page with hiking information
* Sign In modal with form validation
* Email and password validation
* Reusable toast notification system
* Success notifications
* Error notifications
* Information notifications
* Loading notifications
* Simulated trail condition loading feedback
* Responsive and professional SCSS styling

## Toast Notifications

The project uses a reusable JavaScript toast utility located in:

`js/toast.js`

The toast system supports four notification types:

* **Success** — confirms successful actions
* **Error** — explains problems or validation errors
* **Information** — provides helpful information or tips
* **Loading** — provides feedback while an action is processing

## Technologies Used

* HTML5
* SCSS / CSS
* JavaScript
* JavaScript ES Modules
* URL Hash Routing
* MVC structure

## Login Validation

The Sign In form checks for:

* Empty email fields
* Empty password fields
* Leading or trailing spaces
* Minimum email length
* Minimum password length
* An `@` symbol in the email
* A properly formatted email address

If validation fails, an error toast explains what needs to be corrected.

When the form passes validation, a success toast confirms that the user has successfully signed in.

## Trail Feedback

The Trails page includes two interactive feedback examples:

**Hiking Tip**

Displays an information toast with a helpful hiking tip.

**Check Trail Conditions**

Displays a loading toast while the conditions are being checked, followed by a success toast when the simulated loading process is complete.

## Links

### GitHub
https://github.com/onxstigb/IndianaTrails 

### Web 4
https://in-info-web4.luddy.indianapolis.iu.edu/~obrookin/homework4/

## Assignment

This project was created for Homework 4 and demonstrates reusable JavaScript utilities, toast notifications, form validation, dynamic navigation, and user feedback.
