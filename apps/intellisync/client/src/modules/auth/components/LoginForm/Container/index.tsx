import React from 'react';

type LoginFormContainerProps = {
  children: React.ReactNode;
};

export function LoginFormContainer({ children }: LoginFormContainerProps) {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="px-6 py-12 shadow sm:rounded-lg sm:px-12">{children}</div>
    </div>
  );
}
