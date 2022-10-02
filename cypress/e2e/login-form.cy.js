describe('login through form', ()=> {
    it('successful login', ()=> {
        cy.visit('/')
        cy.get('[class*=navigation-sign-in]').click({force: true})
        cy.get('input[type=email]').type(Cypress.env('email'), {force: true})
        cy.get('input[type=password]').type(Cypress.env('password'), {force: true})
        cy.get('[data-cy=main-form-submit-button]').click({force: true})
        cy.get('#my-account-toggle').should('be.visible').and('contain', 'My account')
    })

    it('edit user profile', ()=> {
        cy.intercept('GET', 'https://manage.theguardian.com/idapi/user').as('editProfile')
        cy.get('#my-account-dropdown').children().eq(2).click()
        cy.wait('@editProfile').then(()=> {
            cy.url().should('include', '/public-settings')
        })
    })
})