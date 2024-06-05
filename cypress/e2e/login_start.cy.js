import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it("Test 1 - Log in with user888@gmail.com and log out", () => {
    loginPage.visit();
    loginPage.login("user888@gmail.com", "1234567890");

    // Sprawdzenie, czy strona została załadowana
    cy.url().should("include", "/homepage"); // Zmienione na właściwy URL po zalogowaniu

    // Wydłużenie czasu oczekiwania przed kolejnym kliknięciem
    cy.wait(2000); // Czekaj 2 sekundy

    // Kliknięcie przycisku "burger menu"
    homePage.clickBurgerMenu();

    // Wydłużenie czasu oczekiwania przed kolejnym kliknięciem
    cy.wait(2000); // Czekaj 2 sekundy

    // Znajdź i kliknij przycisk "Log out"
    homePage.clickLogout();

    // Sprawdzenie, czy użytkownik został przekierowany do strony logowania
    cy.url().should("include", "/login");
  });

  it("Test 2 - Log in with testowyqa@qa.team and log out", () => {
    loginPage.visit();
    loginPage.login("testowyqa@qa.team", "QA!automation-1");

    // Sprawdzenie, czy strona została załadowana
    cy.url().should("include", "/homepage"); // Zmienione na właściwy URL po zalogowaniu

    // Wydłużenie czasu oczekiwania przed kolejnym kliknięciem
    cy.wait(2000); // Czekaj 2 sekundy

    // Kliknięcie przycisku "burger menu"
    homePage.clickBurgerMenu();

    // Wydłużenie czasu oczekiwania przed kolejnym kliknięciem
    cy.wait(2000); // Czekaj 2 sekundy

    // Znajdź i kliknij przycisk "Log out"
    homePage.clickLogout();

    // Sprawdzenie, czy użytkownik został przekierowany do strony logowania
    cy.url().should("include", "/login");
  });
});
