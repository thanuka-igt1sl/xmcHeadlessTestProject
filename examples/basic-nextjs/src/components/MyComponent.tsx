import React from 'react';
import { Text, Field } from '@sitecore-content-sdk/nextjs';

interface MyNewComponentProps {
  fields: {
    title: Field<string>;
    heading: Field<string>;
    body: Field<string>;
  };
}

const MyNewComponent = ({ fields }: MyNewComponentProps): JSX.Element => {
  return (
    <div className="component-container">
      <Text tag="h2" field={fields?.title} />
      <Text tag="div" field={fields?.heading} />
      <Text tag="p" field={fields?.body} />
    </div>
  );
};

export default MyNewComponent;