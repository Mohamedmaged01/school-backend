import { HeaderCheckMiddleware } from './header-check.middleware';

describe('HeaderCheckMiddleware', () => {
  it('should be defined', () => {
    expect(new HeaderCheckMiddleware()).toBeDefined();
  });
});
