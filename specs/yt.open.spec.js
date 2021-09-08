describe('Open the app', function () {
  it('it should contains a title and a search input', function () {
    $('~root').waitForDisplayed(1000 * 20);
    expect($('~rootTitle').getText()).toEqual('Youtube Search API');
  });
});
