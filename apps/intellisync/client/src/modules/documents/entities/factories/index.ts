import { faker } from '@faker-js/faker';

import { Document } from '..';

type GenerateRandomDocumentOptions = {
  pageContent?: string;
  chatbotId?: string;
  fileName?: string;
  characters?: number;
};

export function generateRandomDocument(
  options?: GenerateRandomDocumentOptions
): Document {
  return {
    pageContent: options?.pageContent || 'pageContent',
    metadata: {
      essential: {
        chatbotId: options?.chatbotId || faker.string.uuid(),
        fileName: options?.fileName || faker.system.fileName(),
        characters:
          options?.characters || faker.number.int({ min: 500, max: 10000 }),
      },
    },
  };
}
