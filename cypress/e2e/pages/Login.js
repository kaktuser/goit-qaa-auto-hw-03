class LoginPage {
  visit() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  fillEmail(email) {
    cy.get('input[type="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[type="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;
