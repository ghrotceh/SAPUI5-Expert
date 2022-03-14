sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/invoices/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof logaliproup.invoices.model.Models} Models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * 
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("logaligroup.invoices.Component", {
            metadata: {
                manifest : "json",

            },

            init: function () {
                //call init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //set data model on the view
                this.setModel(Models.createRecipient());

                //set i18nmodel on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.invoices.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });

