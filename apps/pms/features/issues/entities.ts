const issueStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;

export type IssueStatus = typeof issueStatus[keyof typeof issueStatus];

export type Issue = {
  id: string;
  title: string;
  description: string;
  status: IssueStatus;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}
