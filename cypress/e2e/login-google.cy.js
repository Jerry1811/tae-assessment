describe('empty spec', () => {
  it('login through google api', ()=> {
    cy.loginByGoogleApi()
    
    // unable to implement this login because I don't know where to pass the google account login token in the request
  })
})