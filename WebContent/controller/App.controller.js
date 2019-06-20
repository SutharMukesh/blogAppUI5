sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (XMLView, Controller, MessageToast, JSONModel, ResourceModel) {
	'use strict';
	// console.log(Text)
	// alert("UI5 BLOG App is ready to load");

	// new Text({
	// 	text:"Hellow World..."
	// }).placeAt("content")

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.app"
	}).then((oView) => {
		oView.placeAt("content")
	})

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onInit: function () {
			let oDataSample1 = {
				rootKey: {
					childKey: "First Child Value"
				}
			};

			let oModel1 = new JSONModel(oDataSample1);
			this.getView().setModel(oModel1,"one");

			// let i18nModel = new ResourceModel({
			// 	bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
			// });
			// this.getView().setModel(i18nModel, "i18n");
		},
		onShowHello: function () {
			// alert("HELLLO World!")
			let msg = this.getView().getModel("one").getProperty("/rootKey/childKey")
			MessageToast.show(msg)
		}
	})
});



// What is XMLView and Controller
// What is Difference between XMLView and Controller