import { ProductManagerPage } from './app.po';

describe('product-manager App', function() {
  let page: ProductManagerPage;

  beforeEach(() => {
    page = new ProductManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
