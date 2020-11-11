sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("walkthrough.controller.App", {

        onInit: function () {
            // Set up my application model
            var oMyData = {
                recipient: {
                    name: "World"
                }
            };

            var oModel = new JSONModel(oMyData);
            this.getView().setModel(oModel);

            // Set up my i18n model
            var i18nModel = new ResourceModel({
                bundleName: "walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");

        },

        onPressSayHello: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMessage", [sRecipient, "our wonderful training session!"]);

            MessageToast.show(sMsg);

        }
    });
});