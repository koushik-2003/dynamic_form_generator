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

### Example: Simple Text Input Form
```json
{

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,
  "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },
   { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

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

[Dynamic Form Generator]([https://dynamic-form-generator-28pizxpso-koushiks-projects-57d53e0a.vercel.app])

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Any contributions are welcome!

## License

This project is open-source and available under the MIT License.

