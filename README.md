# Task.Me - Client

This is a refresh of an existing fullstack project I have. This version is frontend only, and leverages classes rather than MongoDB + Mongoose schemas. Ultimately, this repo will be refactored in itself to connect to a REST API, but I wanted to double down on traditional OOP principles and patterns, rather than working with schemas. 

I am leveraging MaterialUI for the components, CSS-in-JS, and a custom palette I chose. react-transition-group will be added to create a smoother user experience when switching the client-side routes. I enjoy MaterialUI simply because it's clean, has a robust API for all of its components, and the CSS-in-JS functionality of useStyles makes it very easy to make my own customizations. Ultimately, I care more about the underlying logic, so using MaterialUI allows me to focus more on that, rather than the design aspect. Local storage will be used to save a user's projects and tasks (but this will be switched to a MongoDB database at some point in the next month or so). 

The inspiration for this was ultimately Asana, which is a useful SaaS tool frequently used for project management.


