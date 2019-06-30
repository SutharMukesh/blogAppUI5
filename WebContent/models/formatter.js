sap.ui.define([], function () {
	return {
		statusText: function (sStatus) {
			var statusModel = this.getView().getModel("invoice").getProperty("/invStatus");
			if (sStatus in statusModel){
				return statusModel[sStatus]
			}
			return "Unknown: "+sStatus
		}
	}
})