import { TesteAppPage } from './app.po';

describe('teste-app App', () => {
  let page: TesteAppPage;

  beforeEach(() => {
    page = new TesteAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
