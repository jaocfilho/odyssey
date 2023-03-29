'use client';

import { createContext, ReactNode, useContext, useMemo } from 'react';

import { useKanbanReducer } from '@/modules/kanban/hooks/use-kanban-reducer';

type KanbanStateContextValue = ReturnType<typeof useKanbanReducer>;

const KanbanStateContext = createContext({} as KanbanStateContextValue);

type KanbanStateProviderProps = {
  children: ReactNode;
};

export const KanbanStateProvider = ({ children }: KanbanStateProviderProps) => {
  const {
    kanban,
    addCard,
    addColumn,
    removeCard,
    removeColumn,
    updateCard,
    updateColumn,
    changeCardOrder,
    changeColumnOrder,
    moveCard,
  } = useKanbanReducer();

  const contextValue = useMemo(
    () => ({
      kanban,
      addCard,
      addColumn,
      removeCard,
      removeColumn,
      updateCard,
      updateColumn,
      changeCardOrder,
      changeColumnOrder,
      moveCard,
    }),
    [
      kanban,
      addCard,
      addColumn,
      removeCard,
      removeColumn,
      updateCard,
      updateColumn,
      changeCardOrder,
      changeColumnOrder,
      moveCard,
    ]
  );

  return (
    <KanbanStateContext.Provider value={contextValue}>
      {children}
    </KanbanStateContext.Provider>
  );
};

export const useKanbanStateContext = () => useContext(KanbanStateContext);
