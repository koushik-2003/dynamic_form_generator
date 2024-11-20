import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';

const App: React.FC = () => {
  const [schema, setSchema] = useState({
    formTitle: 'Example Form',
    formDescription: 'Edit the JSON to generate this form',
    fields: [],
  });

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <JSONEditor schema={schema} onChange={(updatedSchema) => setSchema(updatedSchema)} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
