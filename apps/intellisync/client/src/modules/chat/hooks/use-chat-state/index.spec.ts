import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useChatState } from '.';
import { assertObjectProperties } from '@odyssey/tests';

describe('useChatState', () => {
  const onAddUserMessage = vi.fn();

  const { result, rerender, unmount } = renderHook(() =>
    useChatState({ onAddUserMessage })
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['chat', 'addUserMessage', 'addSystemMessage'];
    assertObjectProperties(properties, result.current);
  });

  it('should return an array of messages', () => {
    expect(result.current.chat).toEqual([]);
  });

  it('should add an user message to the chat', () => {
    result.current.addUserMessage({ message: 'hello' });

    expect(result.current.chat).toHaveLength(1);
    expect(result.current.chat[0].message).toEqual('hello');
    expect(result.current.chat[0].author).toEqual('user');
  });

  it('should add a system message to the chat', () => {
    result.current.addSystemMessage({ message: 'hello' });

    expect(result.current.chat).toHaveLength(1);
    expect(result.current.chat[0].message).toEqual('hello');
    expect(result.current.chat[0].author).toEqual('system');
  });

  it('should call onAddUserMessage when adding an user message', () => {
    result.current.addUserMessage({ message: 'hello' });

    expect(onAddUserMessage).toHaveBeenCalledWith('hello');
  });

  it('should not call onAddUserMessage when adding a system message', () => {
    result.current.addSystemMessage({ message: 'hello' });

    expect(onAddUserMessage).not.toHaveBeenCalled();
  });

  it('should add an initial state', () => {
    const { result } = renderHook(() =>
      useChatState({
        onAddUserMessage,
        initialState: [{ id: 1, author: 'system', message: 'hello' }],
      })
    );

    expect(result.current.chat).toHaveLength(1);
    expect(result.current.chat[0].message).toEqual('hello');
    expect(result.current.chat[0].author).toEqual('system');
  });
});
