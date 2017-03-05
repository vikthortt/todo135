import { Todo135Page } from './app.po';

describe('todo135 App', () => {
  let page: Todo135Page;

  beforeEach(() => {
    page = new Todo135Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
