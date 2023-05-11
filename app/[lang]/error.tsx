'use client'; // * Error components must be Client components

import { FC, useEffect } from 'react';

export interface RootErrorProps {
  error: Error;
  reset: () => void;
}

export const RootError: FC<RootErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('root error', error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default RootError;
