describe('account login', function () {
  it('it should be error when trying to login', function () {
    const phoneNumberField = '~phoneNumberField'
    const loginButton = '~loginButton'
    const nextButton = '~nextButton'
    $(nextButton).click()
    $(nextButton).click()
    $(nextButton).click()
    $(phoneNumberField).setValue('081234567890')
    $(loginButton).click()
  })
})
