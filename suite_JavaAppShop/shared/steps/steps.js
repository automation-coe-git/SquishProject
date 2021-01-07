// A quick introduction to implementing scripts for BDD tests:
//
// This file contains snippets of script code to be executed as the .feature
// file is processed. See the section 'Behaviour Driven Testing' in the 'API
// Reference Manual' chapter of the Squish manual for a comprehensive reference.
//
// The functions Given/When/Then/Step can be used to associate a script snippet
// with a pattern which is matched against the steps being executed. Optional
// table/multi-line string arguments of the step are passed via a mandatory
// 'context' parameter:
//
//   When("I enter the text", function(context) {
//     <code here>
//   });
//
// The pattern is a plain string without the leading keyword, but a couple of
// placeholders including |any|, |word| and |integer| are supported which can
// be used to extract arbitrary, alphanumeric and integer values resp. from the
// pattern; the extracted values are passed as additional arguments:
//
//   Then("I get |integer| different names", function(context, numNames) {
//     <code here>
//   });
//
// Instead of using a string with placeholders, a regular expression object can
// be passed to Given/When/Then/Step to use regular expressions.
//

import * as names from 'names.js';


Given("some precondition is met", function(context) {
    startApplication("viewMyDesktopApp.jar");
    mouseClick(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), 62, 9, 0, Button.Button1);
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "raghu");
    mouseClick(waitForObject(names.jPasswordField), 76, 16, 0, Button.Button1);
    type(waitForObject(names.jPasswordField), "<Numpad1>");
    type(waitForObject(names.jPasswordField), "<Numpad2>");
    type(waitForObject(names.jPasswordField), "<Numpad3>");
    type(waitForObject(names.jPasswordField), "<Numpad4>");
    clickButton(waitForObject(names.loginJButton));
    clickButton(waitForObject(names.messageOKJButton));
    clickButton(waitForObject(names.shoesJButton));
    clickButton(waitForObject(names.listsOfShoesJButton_2));
    mouseClick(waitForObjectItem(names.colorChoice, "White"), 0, 0, 0, Button.NoButton);
    mouseClick(waitForObjectItem(names.sizeChoice, "7"), 0, 0, 0, Button.NoButton);
    mouseClick(waitForObjectItem(names.qNTYLBSChoice, "2"), 0, 0, 0, Button.NoButton);
    clickButton(waitForObject(names.addItemsToCartJButton));
    clickButton(waitForObject(names.cHECKOUTJButton));
    clickButton(waitForObject(names.messageOKJButton));
    clickButton(waitForObject(names.logOutJButton));
});
