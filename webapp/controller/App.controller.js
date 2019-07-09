sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	'use strict';
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

		// onShowHelloOne: function () {
		// 	let oBundle = this.getView().getModel("i18n").getResourceBundle();
		// 	let recipient = this.getView().getModel("one").getProperty("/rootKey/childKey")
		// 	let msg = oBundle.getText("helloMsg", [recipient])
		// 	MessageToast.show(msg)
		// },
		// onShowHelloTwo: function () {
		// 	let oBundle = this.getView().getModel("i18n").getResourceBundle();
		// 	let recipient = this.getView().getModel("two").getProperty("/rootKey/childKey")
		// 	let msg = oBundle.getText("helloMsg", [recipient])
		// 	MessageToast.show(msg)
		// }

	})
});



// What is XMLView and Controller
// what is difference between xmlview and controller