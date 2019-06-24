sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/resource/ResourceModel"
	],
	function (UIComponent, JSONModel, ResourceModel) {
		'use strict';
		return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
			metaData: {
				rootView: {
					"viewName": "sap.ui.demo.walkthrough.view.App",
					"type": "XML",
					"async": true,
					"id": "app"
				}
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

				let i18nModel = new ResourceModel({
					bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
				});
				this.setModel(i18nModel, "i18n");
			}
		})
	})