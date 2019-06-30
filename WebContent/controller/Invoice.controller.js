sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	'use strict';
	return Controller.extend("sap.ui.demo.walkthrough.controller.Invoice", {
		onInit: function () {
			var oCurrModel = new JSONModel({
				currency: "EUR"
			})
			this.getView().setModel(oCurrModel, "curr")
		}
	})
});