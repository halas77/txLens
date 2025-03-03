/**
 * Enhanced loading component with dynamic animations and playful elements
 * to make waiting more engaging.
 */

const Loading = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[400px] gap-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 animate-gradient-x"></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="h-16 w-16 relative animate-dna-spin">
          <div className="absolute h-full w-full border-4 border-blue-500/30 rounded-full"></div>
          <div
            className="absolute h-full w-full border-4 border-transparent rounded-full 
            border-t-4 border-b-4 border-t-blue-500 border-b-cyan-500 animate-spin"
          >
            <div className="absolute -top-1 -left-1 h-2 w-2 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-cyan-500 rounded-full shadow-lg"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="h-4 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 animate-text-pulse rounded-full"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-mono flex items-center gap-1">
            Analyzing Blockchain Data
          </p>
        </div>

        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 bg-blue-400 rounded-full 
              animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-pan"></div>
      </div>
    </div>
  );
};

export default Loading;
