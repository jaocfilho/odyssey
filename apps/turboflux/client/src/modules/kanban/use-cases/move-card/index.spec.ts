import { assertObjectProperties } from '@odyssey/tests';
import { describe, expect, it } from 'vitest';

import { moveCardUseCase } from '.';
import { generateRandomKanbanColumn } from '../../entities/kanban-column';

describe('moveCardUseCase', () => {
  it('should return an object containing the updated columns', () => {
    const originColumn = generateRandomKanbanColumn();
    const targetColumn = generateRandomKanbanColumn();
    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const updatedColumns = moveCardUseCase({
      cardId,
      originColumn,
      targetColumn,
      targetIndex,
    });

    const properties = ['updatedOriginColumn', 'updatedTargetColumn'];

    assertObjectProperties(properties, updatedColumns);
  });

  it('should move a card from one column to another', () => {
    const originColumn = generateRandomKanbanColumn();
    const targetColumn = generateRandomKanbanColumn();
    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const originLength = originColumn.cards.length;
    const targetLength = targetColumn.cards.length;

    const { updatedOriginColumn, updatedTargetColumn } = moveCardUseCase({
      cardId,
      originColumn,
      targetColumn,
      targetIndex,
    });

    const expectedOriginLength = updatedOriginColumn.cards.length;
    const expectedTargetLength = updatedTargetColumn.cards.length;

    expect(expectedOriginLength).toEqual(originLength - 1);
    expect(expectedTargetLength).toEqual(targetLength + 1);

    const expectUndefined = updatedOriginColumn.cards.find(
      (card) => card.id === cardId
    );

    const expectedCard = updatedTargetColumn.cards.find(
      (card) => card.id === cardId
    );

    expect(expectUndefined).toBeUndefined();
    expect(expectedCard).toBeTruthy();
  });

  it('should move the card to a given index', () => {
    const originColumn = generateRandomKanbanColumn();
    const targetColumn = generateRandomKanbanColumn();
    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const { updatedTargetColumn } = moveCardUseCase({
      cardId,
      originColumn,
      targetColumn,
      targetIndex,
    });

    const expectedIndex = updatedTargetColumn.cards.findIndex(
      (card) => card.id === cardId
    );

    expect(expectedIndex).toEqual(targetIndex);
  });

  it('should move the card if the target column is empty', () => {
    const originColumn = generateRandomKanbanColumn();
    const targetColumn = generateRandomKanbanColumn({ cards: [] });
    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const { updatedTargetColumn } = moveCardUseCase({
      cardId,
      originColumn,
      targetColumn,
      targetIndex,
    });

    const firstCard = updatedTargetColumn.cards[0];

    expect(firstCard.id).toEqual(cardId);
  });

  it('should move the card if the origin column will be empty', () => {
    const originColumn = generateRandomKanbanColumn({ cardsLength: 1 });
    const targetColumn = generateRandomKanbanColumn();
    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const { updatedOriginColumn } = moveCardUseCase({
      cardId,
      originColumn,
      targetColumn,
      targetIndex,
    });

    expect(updatedOriginColumn.cards).toHaveLength(0);
  });

  it('should return the same columns if card is not on origin', () => {
    const originColumn = generateRandomKanbanColumn();
    const targetColumn = generateRandomKanbanColumn();
    const cardId = 'anyId';
    const targetIndex = 0;

    const { updatedOriginColumn, updatedTargetColumn } = moveCardUseCase({
      cardId,
      originColumn,
      targetColumn,
      targetIndex,
    });

    expect(originColumn).toEqual(updatedOriginColumn);
    expect(targetColumn).toEqual(updatedTargetColumn);
  });
});
