describe("calculate", () => {
    it('can add two numbers (6 and 7)', () => {
        // visit site
        cy.visit('/');

        // enter first number
        cy.findByRole('button', { name: /6/i}).click();
        
        // choose operator
        cy.findByRole('button', { name: /\+/i}).click();

        // enter second number 
        cy.findByRole('button', { name: /7/i}).click();

        // hit enter
        cy.findByRole('button', {  name: /=/i}).click();

        // see result
        cy.get('#input').should(
            "have.text",
            "13"
          );
    })

    it('can subtract two numbers (9 and 4)', () => {
        // visit site
        cy.visit('/');

        // enter first number
        cy.findByRole('button', { name: /9/i}).click();
        // choose operator
        cy.findByRole('button', { name: /\-/i}).click();

        // enter second number 
        cy.findByRole('button', { name: /4/i}).click();

        // hit enter
        cy.findByRole('button', {  name: /=/i}).click();

        // see result
        cy.get('#input').should("have.text", "5");
    })

    it('can multiply two numbers (2 and 6)', () => {
        // visit site
        cy.visit('/');

        // enter first number
        cy.findByRole('button', { name: /2/i}).click();
    
        // choose operator
        cy.findByRole('button', { name: /\*/i}).click();

        // enter second number 
        cy.findByRole('button', { name: /6/i}).click();

        // hit enter
        cy.findByRole('button', {  name: /=/i}).click();

        // see result
        cy.get('#input').should("have.text", "12");
    })

    it('can divide two numbers (8 and 4)', () => {
        // visit site
        cy.visit('/');

        // enter first number
        cy.findByRole('button', { name: /8/i}).click();
    
        // choose operator
        cy.findByRole('button', { name: /\//i}).click();

        // enter second number 
        cy.findByRole('button', { name: /4/i}).click();

        // hit enter
        cy.findByRole('button', {  name: /=/i}).click();

        // see result
        cy.get('#input').should("have.text", "2");
    })
})