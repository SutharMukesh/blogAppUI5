sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../models/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	'use strict';
	return Controller.extend("sap.ui.demo.walkthrough.controller.Invoice", {
		formatter: formatter,
		onInit: function () {
			var oCurrModel = new JSONModel({
				currency: "EUR"
			})
			this.getView().setModel(oCurrModel, "curr")
		},
		onFilterEvent: function (event) {
			var a = []
			var sQuery = event.getParameter("query");
			if (sQuery) {
				a.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			var oBinding = this.byId("invoiceList").getBinding("items");
			debugger;
			oBinding.filter(a);
		},
		onPress: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			debugger;
			oRouter.navTo("detail", {
				invoicePath: encodeURIComponent(evt.getSource().getBindingContext("invoice").getPath())
			});
		}
	})
});