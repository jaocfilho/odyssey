import React from 'react';

type LoginWidgetContainerProps = {
  children: React.ReactNode;
};

export function LoginWidgetContainer({ children }: LoginWidgetContainerProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
