import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Journey | Sweetest Menu',
  description: 'From humble beginnings to sweet success - discover the story behind Sweetest Menu and our passion for creating perfect desserts.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
