describe('Calculator', function () {
  it('should do addition 1+2', function () {
    $('~button-1').click();
    $('~button-+').click();
    $('~button-2').click();
    $('~button-=').click();
    expect('~resultText').toHaveValue('3', { ignoreCase: true });
  });
  it('should remove result', function () {
    $('~button-AC').click();
  });
  it('should do addition 4-1', function () {
    $('~button-4').click();
    $('~button--').click();
    $('~button-1').click();
    $('~button-=').click();
    expect('~resultText').toHaveValue('3', { ignoreCase: true });
  });
  it('should remove result', function () {
    $('~button-AC').click();
    it('should do addition 2*3', function () {
      $('~button-2').click();
      $('~button-*').click();
      $('~button-3').click();
      $('~button-=').click();
      expect('~resultText').toHaveValue('6', { ignoreCase: true });
    });
  });
  it('should remove result', function () {
    $('~button-AC').click();
  });
});
