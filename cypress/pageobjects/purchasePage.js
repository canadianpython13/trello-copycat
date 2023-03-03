/// <reference types="cypress" />

class PurchasePage {
    
    elements = {
        addToWishlistIcn : () => 
            cy.get('#wishlist_icon'),
        bookmarkCounter : () =>
            cy.get('span[id="bookmarkcount"]'),
        addToBasketBtn : () =>
            cy.get('div[class="product-add-to-basket"] button[class^="btn-add-to-cart"]'),
        paymentPlanInfoBtn : () =>
            cy.get('.shadow-host').shadow().find('.link'),
        paymentPlanInfoDisplay : () =>
            cy.get('div[id="learn-more-dialog-payment_calculator-default"]'),
        paymentPlanCloseBtn : () =>
            cy.get('learn-more-dialog-payment_calculator-default__nav-bar__right-icon'),
        descriptionLbl : () =>
            cy.get(':nth-child(1) > .accordion-title > h3'),
        descriptionContent : () =>
            cy.get('.rte > span'),
        detailsLbl : () =>
            cy.get(':nth-child(2) > .accordion-title > h3'),
        sizeFitLbl : () =>
            cy.get(':nth-child(3) > .accordion-title > h3'),
        activeContent : () =>
            cy.get('.active > .accordion-content > .rte'),
    }

    favoriteItem() {
        this.elements.addToWishlistIcn().should('be.visible');
        this.elements.addToWishlistIcn().should('have.class', 'fa fa-heart-o');
        this.elements.addToWishlistIcn().should('have.value', null);
        this.elements.addToWishlistIcn().click();
        this.elements.addToWishlistIcn().should('have.class', 'fa fa-heart');
        this.elements.addToWishlistIcn().should('have.value', '1');
    }
    addToBasket() {
        this.elements.addToBasketBtn().should('be.visible');
        this.elements.addToBasketBtn().click();
        cy.url().should('include', '/cart');
    }
    displayPaymentPlan() {
        this.elements.paymentPlanInfoBtn().should('be.visible');
        this.elements.paymentPlanInfoBtn().click();
        this.elements.paymentPlanInfoDisplay().should('be.visible');
    }
    closePaymentPlanDisplay() {
        this.elements.paymentPlanCloseBtn().should('be.visible');
        this.elements.paymentPlanCloseBtn().click();
    }
    openDescription() {
        this.elements.descriptionContent().should('not.be.visible');
        this.elements.descriptionLbl().click();
        this.elements.descriptionContent().should('be.visible');
    }
    openDetails() {
        this.elements.activeContent().should('not.be.visible');
        this.elements.detailsLbl().click();
        this.elements.activeContent().should('be.visible');
    }
    openSizeFit() {
        this.elements.activeContent().should('not.be.visible');
        this.elements.sizeFitLbl().click();
        this.elements.activeContent().should('be.visible');
    }
}
export default PurchasePage;