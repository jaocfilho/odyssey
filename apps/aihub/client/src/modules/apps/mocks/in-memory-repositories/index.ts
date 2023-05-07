import { Model } from '../../entities/model';

class InMemoryModelsRepository {
  public items: Model[] = [];

  async create(data: Model) {
    this.items.push(data);
  }
}

export const inMemoryModelsRepository = new InMemoryModelsRepository();
