type CreateColumn = {
  type: 'CREATE_COLUMN';
  payload: {
    title: string;
  };
};

export type Action = CreateColumn;
