import * as names from 'names.js';

function main() {
    startApplication("viewMyDesktopApp.jar");
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "raghu");
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "<Tab>");
    type(waitForObject(names.jPasswordField), "<Numpad1>");
    type(waitForObject(names.jPasswordField), "<Numpad2>");
    type(waitForObject(names.jPasswordField), "<Numpad3>");
    type(waitForObject(names.jPasswordField), "<Numpad4>");
    clickButton(waitForObject(names.loginJButton));
    clickButton(waitForObject(names.messageOKJButton));
    clickButton(waitForObject(names.shoesJButton));
    clickButton(waitForObject(names.listsOfShoesJButton_2));
    clickButton(waitForObject(names.addItemsToCartJButton));
    clickButton(waitForObject(names.listsOfShoesJButton_3));
    clickButton(waitForObject(names.addItemsToCartJButton));
    test.compare(waitForObjectExists(names.priceList).items, "[205.0,305.0]");
    test.compare(waitForObjectExists(names.priceList).items["class"], "[Ljava.lang.String;");
    test.compare(waitForObjectExists(names.priceList).items.length, 2);
    test.compare(waitForObjectExists(names.priceList).items.alt, "[205.0, 305.0]");
    closeWindow(names.items);
}
