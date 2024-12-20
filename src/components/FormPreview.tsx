import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface FormPreviewProps {
  schema: any;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  if (!schema || !schema.fields || !Array.isArray(schema.fields)) {
    return <div>No fields to display</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h2 className="text-xl font-bold text-black dark:text-white">{schema.formTitle}</h2>
      <p className="text-black dark:text-white">{schema.formDescription}</p>

      {schema.fields.map((field: FormFieldProps) => (
        <div key={field.id} className="mb-4">
          <label className="block mb-2 text-black dark:text-white">{field.label}</label>
          {field.type === 'text' || field.type === 'email' || field.type === 'textarea' ? (
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
              className="border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          ) : field.type === 'select' ? (
            <select {...register(field.id, { required: field.required })} className="border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600">
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
          {errors[field.id] && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded dark:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
