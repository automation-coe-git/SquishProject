import * as names from 'names.js';

function main()
{
    startApplication("viewMyDesktopApp.jar");
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "rah");
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "<Backspace>");
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "hhu");
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "<Tab>");
    mouseDrag(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), 73, 19, -143, 0, Modifier.None, Button.Button1);
    type(waitForObject(names.htmlH1HTH3R3H1HtmlJTextField), "raghu");
    mouseClick(waitForObject(names.jPasswordField), 54, 22, 0, Button.Button1);
    type(waitForObject(names.jPasswordField), "123");
    clickButton(waitForObject(names.loginJButton));
    clickButton(waitForObject(names.messageOKJButton));
}
