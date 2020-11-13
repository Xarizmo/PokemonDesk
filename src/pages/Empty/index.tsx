import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>I am empty page for {title}!</div>
    </div>
  );
};

export default EmptyPage;
