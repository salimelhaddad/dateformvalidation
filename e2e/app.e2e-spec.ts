import { DateformvalidationPage } from './app.po';

describe('dateformvalidation App', () => {
  let page: DateformvalidationPage;

  beforeEach(() => {
    page = new DateformvalidationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
