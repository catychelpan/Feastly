# React Tailwind Firebase Spoonacular Project

Web application to generate diet plans based on chosen products and diet preferences. Plans are generated for the week and persisted for each registered user. Also, it gives out detailed instructions, ingredient set and nutrition information on each recipe generated. 

## Tech Stack

This project is built using the following technologies and tools:

- React: A popular JavaScript library for building user interfaces.

- Tailwind CSS: A utility-first CSS framework for quickly designing and styling your components.

- Firebase Authentication: Used for Google Sign-In authentication, making it easy for users to access the application.

- Spoonacular API: An API for fetching data related to diet plans, products, and other food-related information.

- Vercel: The deployment platform used to host the project and make it accessible on the web.

This stack allows for efficient development, styling, user authentication, and data retrieval for the project. It provides a solid foundation for building a feature-rich application.

Feel free to explore and extend the project's capabilities using these technologies.


## Prerequisites

Before running the project, you need to obtain API keys for Firebase and Spoonacular. You will also need Node.js and npm installed on your system.

- Firebase API Key: Visit the [Firebase Console](https://console.firebase.google.com/) to create a project and configuration object.
- Spoonacular API Key: Sign up for a free account at [Spoonacular](https://spoonacular.com/) and obtain an API key.

## Getting Started

1. Clone the repository to your local machine:

   
bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   npm install
   
2. Put env variable received from [Spoonacular](https://spoonacular.com/) as 
VITE_API_KEY
 in 
.env
 file
## Firebase Authentication Configuration

This project uses Firebase for Google Sign-In. To set up Firebase Authentication for Google Sign-In:

1. Go to the Firebase Console: Visit [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. Enable Google Sign-In: In the project settings, navigate to the "Authentication" section and enable Google as a sign-in method.

3. Get Firebase Config: Under the "Web" tab in the "Firebase SDK snippet," select "Config" and copy the configuration object.

4. Replace Configuration Object: Open the src/firebase.js file in your project and replace the configuration object with the one you copied from Firebase.

Now your project is configured to use Firebase for Google Sign-In
