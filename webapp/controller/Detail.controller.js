sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
	'use strict';
	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit: function () {
			var oCurrModel = new JSONModel({
				currency: "EUR"
			})
			this.getView().setModel(oCurrModel, "curr")

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			// debugger;
			this.getView().bindElement({
				path: decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},
		onNavBack: function () {
			debugger
			var oPrevHash = new sap.ui.core.routing.History.getInstance().getPreviousHash();
			if (oPrevHash) {
				window.history.go(-1)
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {},true);
			}
		}
	})
});