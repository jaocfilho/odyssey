'use client';

import { ReactNode } from 'react';

type OpenDrawer = () => void;

export type ComponentDrawerTriggerProps = {
  openDrawer: OpenDrawer;
  triggerComponent: (openDrawer: OpenDrawer) => ReactNode;
};

export function ComponentDrawerTrigger({
  openDrawer,
  triggerComponent,
}: ComponentDrawerTriggerProps) {
  return <>{triggerComponent(openDrawer)}</>;
}
