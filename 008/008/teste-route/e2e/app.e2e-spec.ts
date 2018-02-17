import { TesteRoutePage } from './app.po';

describe('teste-route App', () => {
  let page: TesteRoutePage;

  beforeEach(() => {
    page = new TesteRoutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
