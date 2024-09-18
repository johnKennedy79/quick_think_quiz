# Quick Think is a quiz game designed to challenge your general knowledge and keep track of your score as you play.

The project is currently in the planning phase, which you can view here: Figma Board - https://www.figma.com/board/xBfpknPYdGEmMZfPpDEm62/W12-Project?node-id=0-1&node-type=canvas&t=nvCWHuwQHRfBbGhW-0

## This app is part of a group project within the Tech Educators Bootcamp and will be built using Next.js and React. Key features include user authentication, modern UI design, and a fully functional, mobile-first responsive layout. The app will be deployed online, allowing users to play and interact with it by September 20th. Our team—comprising John, Noah, Sam, and myself—will be contributing to this project daily via our shared repository.

User Stories

- The user will be able to navigate dynamic routes, leading to pages generated for newly added content.
- The user will interact with an app that integrates a database and server, potentially using server-side rendering with Next.js, though this is not required.
- The user will be able to add various types of content, such as items, posts, comments, or images, which will be saved to the database and associated with their account.
- The user will need to authenticate, with authentication extending to authorization features. This may include access control to an admin area or the ability to review and edit only their own content.
- The user will experience a mobile-responsive application, optimized for performance across different devices.

Stretch Goals

- The user will be able to create new quiz questions, categories, and difficulty levels as either an admin or regular user.
- The user will be able to compete with other users in real-time.
- The user will have access to a personalized scoreboard, where they can check their rankings alongside other players.

Challange we used a form which is a client component to create a dynamic route to a server page that made a get request from our database based on the search perameters in the route once we had the quiz questions that the user had selected we had to set this information in the context file this proved to be quite challanging we passed the questions as props to a component that that was wraped in the context provider and in that component set the state of questions using a use effect function this allowed us to use the questions and data from the questions in other components and allowed us to make functions in the use context file to manage the variouse states of our quiz game.

##- Styling or wireframes or accessibility

we all worked on that as a team Zaynab and Noah done most of the graphic elements samuel done the about page and John contributed ideas and flow.

##- Javascript or jsx or Radix or other 3rd party items

Samuel worken on tabs primative for the about page.

##- Database schema or queries or form

John set up the schema, we all contributed to data entry of the questions, Zaynab is working on userprofile data

##- Components or routes or dynamic routes

Zaynab set up the page lay out and routes. John created dynamic search route to get the gize questions. sam set up the radix about component Noah done the footer, logo, and cup icon and worked on the layout for components in the home page

##- Authentication (implementing or using user data) deployment or hosting

Had difficulty installing Clerk authentication pair programmed as a group to try and resolve the issue we all ennded up uninstalling and reinstalling Clerk and .env.local file to the root folder.

##- User stories or planning diagrams or managing Trello or reflections

We all worked on stories, planning and Trello together once the project got underway Zaynab and Noah have managed and kept the trello upto date

##- Creating pull requests or resolving conflicts or managing the project repo

we all worked together on pull request and merge conflicts

##- Preparing documentation or preparing

Noah made an early start on the presantation
