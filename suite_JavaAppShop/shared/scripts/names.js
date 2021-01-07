import { RegularExpression, Wildcard } from 'objectmaphelper.js';

export var login = {"caption": "", "type": "myDesktopApp.Login", "visible": true};
export var htmlH1HTH3R3H1HtmlJLabel = {"caption": "<html><h1>H! TH3R3</h1></html>", "type": "javax.swing.JLabel", "visible": true, "window": login};
export var htmlH1HTH3R3H1HtmlJTextField = {"aboveWidget": htmlH1HTH3R3H1HtmlJLabel, "type": "javax.swing.JTextField", "visible": true, "window": login};
export var jPasswordField = {"type": "javax.swing.JPasswordField", "visible": true, "window": login};
export var loginJButton = {"caption": "Login", "type": "javax.swing.JButton", "visible": true, "window": login};
export var messageJDialog = {"caption": "Message", "type": "javax.swing.JDialog", "visible": true};
export var messageOKJButton = {"caption": "OK", "name": "OptionPane.button", "type": "javax.swing.JButton", "visible": true, "window": messageJDialog};
export var items = {"caption": "", "type": "myDesktopApp.Items", "visible": true};


export var shoesJButton = {"caption": "Shoes", "type": "javax.swing.JButton", "visible": true, "window": items};
export var listsOfShoesJLabel = {"caption": "Lists of Shoes", "type": "javax.swing.JLabel", "visible": true, "window": items};
export var listsOfShoesJButton = {"aboveWidget": listsOfShoesJLabel, "caption": "", "type": "javax.swing.JButton", "visible": true, "window": items};
export var listsOfShoesJButton_2 = {"caption": "", "leftWidget": listsOfShoesJButton, "type": "javax.swing.JButton", "visible": true, "window": items};
export var addItemsToCartJButton = {"caption": "Add Items to Cart", "type": "javax.swing.JButton", "visible": true, "window": items};
export var listsOfShoesJButton_3 = {"caption": "", "leftWidget": listsOfShoesJButton_2, "type": "javax.swing.JButton", "visible": true, "window": items};
export var shoppingCartJLabel = {"caption": "Shopping Cart ", "type": "javax.swing.JLabel", "visible": true, "window": items};
export var priceJLabel = {"caption": "Price($)", "type": "javax.swing.JLabel", "visible": true, "window": items};
export var priceList = {"aboveWidget": priceJLabel, "type": "java.awt.List", "visible": true, "window": items};
