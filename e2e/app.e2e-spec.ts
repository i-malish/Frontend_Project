import { FrontendProjectPage } from './app.po';

describe('frontend-project App', function() {
  let page: FrontendProjectPage;

  beforeEach(() => {
    page = new FrontendProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
