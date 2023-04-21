'use client';

import { createModel } from '../../api';

export function Button() {
  return <button onClick={() => createModel()}>click me</button>;
}
