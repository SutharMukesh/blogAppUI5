sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel"
	],
	function (UIComponent, JSONModel) {
		'use strict';
		return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
			metaData: {
				manifest: "json"
			},
			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
				
				let oData = {
					oDataSample1: {
						rootKey: {
							childKey: "First Child Value"
						}
					},
					oDataSample2: {
						rootKey: {
							childKey: "Second Child Value"
						}
					}
				};

				let oModel1 = new JSONModel(oData.oDataSample1);
				this.setModel(oModel1, "one");

				let oModel2 = new JSONModel(oData.oDataSample2);
				this.setModel(oModel2, "two");
				
				let oInvoice = new JSONModel("./model/invoice.json")
				this.setModel(oInvoice,"invoice");
			}
		})
	})