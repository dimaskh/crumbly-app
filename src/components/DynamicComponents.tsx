import dynamic from 'next/dynamic';

// Dynamically import components that are not needed immediately
export const DynamicAbout = dynamic(() => import('./About'), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
});

export const DynamicContact = dynamic(() => import('./Contact'), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
});
