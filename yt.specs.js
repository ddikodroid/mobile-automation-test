describe('search youtube videos by keyword', function () {
  it('it should be able to show some video cards', function () {
    $('~searchInput').setValue('React Native');
    $('~searchButton').click();
  });
});
