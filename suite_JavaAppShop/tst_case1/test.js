import * as names from 'tst_case1_obj.js';

function main() {
    startApplication("viewMyDesktopApp.jar");
    testSettings.logScreenshotOnFail = true;
    testSettings.logScreenshotOnFail=true;
    mouseClick(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField));
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "raghu");
    mouseClick(waitForObject(names.jPasswordField));
    type(waitForObject(names.jPasswordField), "1234");
    clickButton(waitForObject(names.loginJButton));
    test.pass("logged in to Application ");
    clickButton(waitForObject(names.messageOKJButton, 37878));
    test.compare(waitForObjectExists(names.logOutJButton).label, "Log Out");
    waitForObject(names.shoesJButton, 3000)
    clickButton(waitForObject(names.shoesJButton));
    test.compare(waitForObjectExists(names.listsOfShoesJLabel).text, "Lists of Shoes");
    waitForObject(names.listsOfShoesJLabel, 2000)
    clickButton(waitForObject(names.listsOfShoesJButton_6));
    waitForObject(names.listsOfShoesJButton_6, 3000)
    var color = testData.dataset("TestDataShop.tsv");
    for (var colors in color) {
        var colorChoices = testData.field(color[colors], "shoeColor");
        mouseClick(waitForObjectItem(names.colorChoice, colorChoices));
    }
    waitForObject(names.sizeChoice, 3000)
    var shoeSizesdataset = testData.dataset("TestDataShop.tsv");
    for (var record in shoeSizesdataset) {
        var size = testData.field(shoeSizesdataset[record], "shoeSize");
        mouseClick(waitForObjectItem(names.sizeChoice, size));
    }
    clickButton(waitForObject(names.addItemsToCartJButton));
    clickButton(waitForObject(names.listsOfShoesJButton_7));
    clickButton(waitForObject(names.addItemsToCartJButton));
    test.compare(waitForObjectExists(names.listsOfItemsJLabel).text, "Lists of Items");
    waitForObject(names.listsOfItemsJLabel, 3000)
    mouseClick(waitForObjectItem(names.listsOfItemsList, "Converse Shoes"));
    mouseClick(waitForObjectItem(names.listsOfItemsList, "High Heel Shoes"));
   
    test.compare(waitForObjectExists(names.listsOfItemsList).items.length, 2);
   // var items=(waitForObjectExists(names.listsOfItemsList).items[0]);
    var items2=(waitForObjectExists(names.listsOfItemsList).items.length);
  //  print(items);
   // test.log("items dis",items);
   //test.log("items dis2",items2);
    test.compare(waitForObjectExists(names.listsOfItemsList).itemcount, 3);
    test.compare(waitForObjectExists(names.listsOfItemsList).items.alt, "[Converse Shoes, High Heel Shoes]");
    clickButton(waitForObject(names.cHECKOUTJButton));
   // test.compare(waitForObjectExists(names.messageJLabel).accessiblecontext.accessiblename, "Thank You for Shopping with us..Please follow the pin pad..Your total for 1 items is: 205");
    clickButton(waitForObject(names.messageOKJButton));
    clickButton(waitForObject(names.logOutJButton));
}
