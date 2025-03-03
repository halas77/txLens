/**
 * Renders a summary section with provided mock data in a styled container.
 * @param summary - data containing the summary text.
 */

import DOMPurify from "dompurify";

const Summary = ({ summary }: { summary: string }) => {
  const sanitizedSummary = DOMPurify.sanitize(summary);
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg prose dark:prose-invert">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
        AI Summary
      </h3>
      <p
        className="text-gray-700 dark:text-gray-200 text-sm"
        dangerouslySetInnerHTML={{ __html: sanitizedSummary }}
      ></p>
    </div>
  );
};

export default Summary;
