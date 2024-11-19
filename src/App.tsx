import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';

const App: React.FC = () => {
  const [schema, setSchema] = useState<string>(JSON.stringify({
    formTitle: 'Example Form',
    formDescription: 'Edit the JSON to generate this form',
    fields: [],
  }, null, 2));

  let parsedSchema;
  try {
    parsedSchema = JSON.parse(schema);
  } catch (err) {
    parsedSchema = null;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <JSONEditor schema={schema} onChange={setSchema} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormPreview schema={parsedSchema} />
      </div>
    </div>
  );
};

export default App;
