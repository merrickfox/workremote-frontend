import { WorkremoteFrontendPage } from './app.po';

describe('workremote-frontend App', function() {
  let page: WorkremoteFrontendPage;

  beforeEach(() => {
    page = new WorkremoteFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
