describe('Search Bar', function () {
  it('it should be able to input text and press button', function () {
    $('~searchInput').setValue('React Native');
    $('~searchButton').click();
    $('~videoCard').waitForDisplayed(1000 * 20);
  });
});
