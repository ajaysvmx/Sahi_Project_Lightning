

/**
 * SFM transaction & designer page object repository
 */
var $bo_pg_sfmTransactionAndDesigner = new function bo_pg_sfmTransactionAndDesigner() {
    this.txt_standardSfmTransactionQuickFind= _f("main").s_textinput("searchText[2]");
    this.btn_standardSfmTransaction= _f("main").tab("Standard SFM Transactions");
    this.btn_yourCustomSfmTransactions = _f("main").tab("Your Custom SFM Transactions");
    this.txt_yourCustomSfmTransactionsQuickFind = _f("main").s_textinput("searchText[1]").near(_f("main").tab("Your Custom SFM Transactions"));
    this.btn_clone = _f("main").s_button("Clone");
    this.txt_name = _f("main").s_textinput("pName");
    this.txt_sfmTransactionId = _f("main").s_textinput("pId");
    this.btn_qualifyingCriteriaAndFieldMapping = _f("main").tab("Qualifying Criteria and Field Mappings");
    this.btn_screenDesigner = _f("main").tab("Screen Designer");
    this.lbl_workOrder = _f("main").s_richtext("Work Order");
    this.sel_sfmTemplate = _f("main").s_combobox("searchCombo[3]");
    this.txt_sfmSavePageLayoutAs = _f("main").s_textinput("Save page layout as");
    this.txt_sfmSavePageLayoutAsId = _f("main").s_textinput("advTxt");
    this.btn_addFieldToPage = _f("main").s_button("Add Field to Page");
    this.txt_quickFindField = _f("main").s_textinput("searchText").near(_f("main").s_button("Add Field to Page"));
    this.btn_quickSave = _f("main").s_button("Save As[3]");
    this.btn_saveAndclose = _f("main").s_button("Save & Close");
    this.alert_sfm = _f("main").alert("Please enter a unique Page Name The page ID you have entered already exists. Please enter a unique ID");
    this.btn_ok = _f("main").button("OK");
    this.btn_backToList = _f("main").s_button("Back To List");
    this.btn_yes = _f("main").button("Yes");

    /**
     * Select a SFM from the SFM list, set $isCustom to select from custom SFM list elements.
     *@param $sfmName
     *@param $isCustom
     */
    this.selectSFM = function($sfmName, $isCustom) {
	if ($isCustom) {
	 _click($bo_pg_sfmTransactionAndDesigner.btn_yourCustomSfmTransactions);
	}
	_click(_f("main").s_checkbox(2).leftOf(_f("main").s_label($sfmName), 10, 10));
	_takePageScreenShot();
    };

    /**
     * Add a field in the SFM Designer page
     * @param $fieldName
     * @param $containerName
     */
    this.addField = function($fieldName, $containerName) {
	_click(_f("main").fieldrenderer("[object Object]").near(_f("main").formitemlabel($containerName)));
	_setValue($bo_pg_sfmTransactionAndDesigner.txt_quickFindField, $fieldName);
	_click(_f("main").s_label($fieldName));
	_click($bo_pg_sfmTransactionAndDesigner.btn_addFieldToPage);
    };

    /**
     * Delete a field  from the SFM Designer page
     * @param $fieldName
     */
    this.deleteField = function($fieldName) {
	_click(_f("main").s_button("closeBtn").near(_f("main").s_richtext($fieldName)));
    };

}
