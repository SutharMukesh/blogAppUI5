sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
	'use strict';
	return Controller.extend("sap.ui.demo.walkthrough.controller.TextHandlers", {

		onShowHelloOne: function () {
			let oBundle = this.getView().getModel("i18n").getResourceBundle();
			let recipient = this.getView().getModel("one").getProperty("/rootKey/childKey")
			let msg = oBundle.getText("helloMsg", [recipient])
			MessageToast.show(msg)
		},
		onShowHelloTwo: function () {
			let oBundle = this.getView().getModel("i18n").getResourceBundle();
			let recipient = this.getView().getModel("two").getProperty("/rootKey/childKey")
			let msg = oBundle.getText("helloMsg", [recipient])
			MessageToast.show(msg)
		},
		onOpenDialog: function () {
			let oView = this.getView()
			console.log(oView);
			debugger;
			if (!this.byId("genericDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.walkthrough.view.genericDialog",
					controller:this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("genericDialog").open();
			}
		},
		onCloseDialog:function(){
			this.byId("genericDialog").close();
		}
	})
});



// What is XMLView and Controller
// What is Difference between XMLView and Controller