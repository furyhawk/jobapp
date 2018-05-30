sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZGEATFA001ZGEATFA001.controller.View", {
		
		onLine1: function(oEvent) {
			this.byId("hbL2").setVisible(true);
		},

		onLine2: function(oEvent) {
			this.byId("lbL3a").setVisible(true);
			this.byId("slL3a").setVisible(true);
		},

		onLine3a: function(oEvent) {
			this.byId("lbL3b").setVisible(true);
			this.byId("slL3b").setVisible(true);
		},
		onLine3b: function(oEvent) {
			this.byId("pn3").setVisible(true);
			this.byId("pn3").setExpanded(true);
		}

	});
});