import React from 'react';

const HtmlViewer = ({ html }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HtmlViewer;