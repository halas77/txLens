import { ShieldExclamationIcon } from "@heroicons/react/24/outline";

/**
 * Banner component displaying a warning message about suspicious activity with an icon and styled text.
 */

const Banner = () => {
  return (
    <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-3 rounded-lg mb-4 flex items-center space-x-2">
      <ShieldExclamationIcon className="h-5 w-5" />
      <span>Suspicious activity detected!</span>
    </div>
  );
};

export default Banner;
