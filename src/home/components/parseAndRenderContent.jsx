import React from 'react';

  const ParseAndRenderContent = (content) => {
  // Split the content into paragraphs
  const paragraphs = content.split('\n\n');

  // Parse each paragraph
  const parsedParagraphs = paragraphs.map((paragraph, index) => {
    // Check if the paragraph starts with ##
    if (paragraph.trim().startsWith('##')) {
      // Extract the title text
      const titleText = paragraph.replace(/^##\s*(.*)$/, '$1').trim();

      // Apply dynamic styles based on title level
      const titleStyle = {
        fontSize: index === 0 ? '32px' : '28px', // Adjust font size based on the title level
        color: index === 0 ? '#0066cc' : '#009933', // Adjust color based on the title level
        fontWeight: 'bold',
        marginBottom: '16px', // Add margin for spacing
      };

      // Render the title as an h2 element
      return (
        <h2 key={index} style={titleStyle}>
          {titleText}
        </h2>
      );
    }

    // Render regular paragraphs
    return <p key={index}>{paragraph}</p>;
  });

  return parsedParagraphs;
};

export default ParseAndRenderContent ;