import { CalculadorPage } from './app.po';

describe('calculador App', function() {
  let page: CalculadorPage;

  beforeEach(() => {
    page = new CalculadorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
