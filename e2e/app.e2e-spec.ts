import { RideInNewPage } from './app.po';

describe('ride-in-new App', function() {
  let page: RideInNewPage;

  beforeEach(() => {
    page = new RideInNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
