import { AngularOnlineStorePage } from './app.po';

describe('angular-online-store App', () => {
  let page: AngularOnlineStorePage;

  beforeEach(() => {
    page = new AngularOnlineStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
