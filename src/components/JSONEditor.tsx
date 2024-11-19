import React, { useState } from 'react';
import { Validator } from 'jsonschema';

interface JSONEditorProps {
  onChange: (parsedJSON: any) => void;
  schema: any; // Replace with a more specific type if you have one
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onChange, schema }) => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const validator = new Validator();

  const validateJSON = (json: any, schema: any) => {
    try {
      const validationResult = validator.validate(json, schema);
      if (validationResult.errors.length > 0) {
        return { isValid: false, errors: validationResult.errors.map((e) => e.stack) };
      }
      return { isValid: true, errors: [] };
    } catch (error) {
      return { isValid: false, errors: [String(error)] };
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    setJsonInput(input);

    try {
      const parsedJSON = JSON.parse(input);
      const validation = validateJSON(parsedJSON, schema);
      if (!validation.isValid) {
        setErrors(validation.errors);
      } else {
        setErrors([]);
        onChange(parsedJSON); // Notify parent about the valid JSON
      }
    } catch (error) {
      if (error instanceof Error) {
        // Narrow the type and use the `message` property
        setErrors([`Invalid JSON: ${error.message}`]);
      } else {
        setErrors(['An unknown error occurred.']);
      }
    }
  };

  return (
    <div className="flex flex-col h-full">
      <textarea
        className="flex-grow border p-2 rounded focus:outline-none focus:ring"
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Edit JSON here..."
      />
      <div className="text-red-500 mt-2">
        {errors.map((error, index) => (
          <div key={index}>{error}</div>
        ))}
      </div>
    </div>
  );
};

export default JSONEditor;
