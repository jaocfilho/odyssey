import { describe, expect, it } from 'vitest';

import { chatbotsUrls, isChatbotsPath } from '.';

describe('chatbotsUrls', () => {
  it('should return correct base url', () => {
    expect(chatbotsUrls.base).toBe('/dashboard/chatbots');
  });

  it('should returh the correct base details url', () => {
    expect(chatbotsUrls.details.base('id')).toBe('/dashboard/chatbots/id');
  });

  it('should returh the correct overview url', () => {
    expect(chatbotsUrls.details.overview('id')).toBe(
      '/dashboard/chatbots/id/overview'
    );
  });

  it('should returh the correct persona url', () => {
    expect(chatbotsUrls.details.persona('id')).toBe(
      '/dashboard/chatbots/id/persona'
    );
  });

  it('should returh the correct settings url', () => {
    expect(chatbotsUrls.details.settings('id')).toBe(
      '/dashboard/chatbots/id/settings'
    );
  });

  it('should returh the correct data source url', () => {
    expect(chatbotsUrls.details.dataSource('id')).toBe(
      '/dashboard/chatbots/id/data-source'
    );
  });
});

describe('isChatbotsPath', () => {
  it('should return true if pathname is chatbots', () => {
    expect(isChatbotsPath('/dashboard/chatbots')).toBe(true);
    expect(isChatbotsPath('/dashboard/chatbots/any')).toBe(true);
  });

  it('should return false if pathname is not chatbots', () => {
    expect(isChatbotsPath('/dashboard')).toBe(false);
    expect(isChatbotsPath('/dashboard/any')).toBe(false);
  });
});
