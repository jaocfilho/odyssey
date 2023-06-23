'use client';

import { Button } from 'tailwind-ui';

export default function ChatbotDetailsDataSourcePage() {
  const handleClick = async () => {
    await fetch('http://localhost:3000/api/vector');
  };

  return (
    <div className="m-4 flex flex-col gap-8">
      <h2>chatbot data source page</h2>
      <Button onClick={handleClick}>Test vector store</Button>
    </div>
  );
}
