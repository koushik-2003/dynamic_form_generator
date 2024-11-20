# Dynamic Form Generator

A web application that allows users to dynamically generate forms based on JSON input. The form fields are generated according to the provided JSON schema, making it highly customizable and easy to use.

## Setup Instructions

To get the project up and running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dynamic-form-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dynamic-form-generator
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Example JSON Schemas

Below are some examples of JSON schemas you can use to generate forms:

### Example 1: Simple Text Input Form
```json
{
  "fields": [
    {
      "type": "text",
      "label": "Full Name",
      "name": "fullName",
      "required": true
    },
    {
      "type": "email",
      "label": "Email Address",
      "name": "email",
      "required": true
    }
  ]
}
```

### Example 2: Form with Radio Buttons and Checkboxes
```json
{
  "fields": [
    {
      "type": "radio",
      "label": "Gender",
      "name": "gender",
      "options": ["Male", "Female", "Other"],
      "required": true
    },
    {
      "type": "checkbox",
      "label": "Accept Terms & Conditions",
      "name": "terms",
      "required": true
    }
  ]
}
```

## Local Development Guide

- The application uses Node.js with Express.js to serve the content.
- All form field types (text, email, radio, checkbox, etc.) are dynamically generated based on the provided JSON schema.
- For local development, you can modify the JSON schema directly in the front-end to test different form structures.
- The app uses basic CSS for styling and ensures responsive design for a seamless user experience.

## Deploying with Vercel

To deploy the application using Vercel:

1. Create a Vercel account and connect it to your GitHub repository.
2. Push your code to GitHub if you haven't already.
3. In your Vercel dashboard, click on "New Project" and import the repository.
4. Vercel will automatically detect that it's a Node.js project and configure the deployment for you.
5. Once the deployment is complete, you can access the live version of the application.

## Deployed Application Link

You can view the deployed application at the following link:

[Dynamic Form Generator](https://dynamic-form-generator-78icrjgaa-koushiks-projects-57d53e0a.vercel.app)

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Any contributions are welcome!

## License

This project is open-source and available under the MIT License.

