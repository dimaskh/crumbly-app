'use client';

import { useEffect, FC } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center py-12 max-w-lg mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 mb-6">
            {error.message || 'We encountered an unexpected error. Please try again.'}
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 mb-4">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        <button
          onClick={reset}
          className="bg-[#0abab5] text-white px-6 py-2 rounded-lg hover:bg-[#81D8D0] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
