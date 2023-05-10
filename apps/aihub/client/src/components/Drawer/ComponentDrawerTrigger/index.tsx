'use client';

import { ReactNode } from 'react';

type OpenDrawer = () => void;

export type ComponentDrawerTriggerProps = {
  openDrawer: OpenDrawer;
  trigger: (openDrawer: OpenDrawer) => ReactNode;
};

export function ComponentDrawerTrigger({
  openDrawer,
  trigger,
}: ComponentDrawerTriggerProps) {
  return <>{trigger(openDrawer)}</>;
}
