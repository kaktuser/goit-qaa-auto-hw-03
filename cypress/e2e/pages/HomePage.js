class HomePage {
  clickBurgerMenu() {
    cy.get("#open-navigation-menu-mobile").click();
  }

  clickLogout() {
    cy.contains("Log out").click();
  }
}

export default HomePage;
