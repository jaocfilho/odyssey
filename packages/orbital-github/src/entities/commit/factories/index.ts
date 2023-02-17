import { faker } from '@faker-js/faker';

import { Author, Commit } from '../entity';

type CreateRandomAuthorOptions = Partial<Author>;

export const createRandomAuthor = (
  options?: CreateRandomAuthorOptions
): Author => {
  return {
    name: options?.name || faker.name.fullName(),
    email: options?.email || faker.internet.email(),
    date: options?.date || faker.date.recent().toString(),
  };
};

type CreateRandomCommitOptions = Partial<Commit>;

export const createRandomCommit = (
  options?: CreateRandomCommitOptions
): Commit => {
  return {
    sha: options?.sha || faker.git.commitSha(),
    commit: {
      author: options?.commit?.author || createRandomAuthor(),
      committer: options?.commit?.committer || createRandomAuthor(),
      message: options?.commit?.message || faker.git.commitMessage(),
      url: options?.commit?.url || faker.internet.url(),
    },
  };
};
