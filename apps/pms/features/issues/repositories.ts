import { Issue } from "./entities";

interface Repository<T> {
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(entity: T): Promise<T>;
  get(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}

export interface IssueRepository extends Repository<Issue> {}

export class IssueInMemoryRepository implements IssueRepository {
  private issues: Issue[] = [];

  async create(issue: Issue): Promise<Issue> {
    this.issues.push(issue);
    return issue;
  }

  async update(issue: Issue): Promise<Issue> {
    const index = this.issues.findIndex((i) => i.id === issue.id);
    this.issues[index] = issue;
    return issue;
  }

  async delete(issue: Issue): Promise<Issue> {
    const index = this.issues.findIndex((i) => i.id === issue.id);
    this.issues.splice(index, 1);
    return issue;
  }

  async get(id: string): Promise<Issue> {
    const issue = this.issues.find((i) => i.id === id);
    if (!issue) {
      throw new Error('Issue not found');
    }

    return issue;
  }

  async getAll(): Promise<Issue[]> {
    return this.issues;
  }
}
