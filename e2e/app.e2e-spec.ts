import { UnitestPage } from './app.po';

describe('unitest App', () => {
  let page: UnitestPage;

  beforeEach(() => {
    page = new UnitestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
