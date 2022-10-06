import { routes } from '../fixtures/routes.utils'
import { BUTTON_SUBMIT, MAIN_PROFILE_DROPDOWN, PHONE_FIELD, PROFILE_DROPDOWN_ITEM, SUCCESS_MESSAGE } from '../support/selectors/profile.selectors'
import {generatePhone} from './_helpers/main.utils'

const {dashboard, profile_detail} = routes

describe('login through form', ()=> {
    beforeEach(()=> {
        cy.intercept('GET', 'https://auth.lambdatest.com/api/user').as('user')
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    it('successful login', ()=> {
       cy.url().should('contain', dashboard)
    })

    it('navigate to profile page and change phone number', ()=> {
        cy.get(MAIN_PROFILE_DROPDOWN).click().then(()=>{
            cy.get(PROFILE_DROPDOWN_ITEM).contains('Profile').click()
            cy.wait('@user').then(()=> {
                cy.url().should('contain', profile_detail)
            })
        })
        cy.get(BUTTON_SUBMIT).contains('Save Changes').as('saveChanges')

        cy.get('@saveChanges').should('have.class', 'inactiveBtn') // save changes button should be inactive
        cy.get(PHONE_FIELD).clear().type(generatePhone())

        cy.get('@saveChanges').should('have.class', 'activeBtn') // save changes button should be active
        cy.get('@saveChanges').click().then(() => {
            cy.get(SUCCESS_MESSAGE).should('be.visible').and('contain', 'User profile updated successfully')
        })   
    })
})