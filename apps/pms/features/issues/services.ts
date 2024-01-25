import { Issue } from "./entities";
import { IssueRepository } from "./repositories";

interface ICreateIssueService {
  execute(issue: Issue): Promise<Issue>;
}

export class CreateIssueService implements ICreateIssueService {
  constructor(private repository: IssueRepository) {}

  async execute(issue: Issue): Promise<Issue> {
    return this.repository.create(issue);
  }
}

interface IUpdateIssueService {
  execute(issue: Issue): Promise<Issue>;
}

export class UpdateIssueService implements IUpdateIssueService {
  constructor(private repository: IssueRepository) {}

  async execute(issue: Issue): Promise<Issue> {
    return this.repository.update(issue);
  }
}