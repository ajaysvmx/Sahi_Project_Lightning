/**
 * Function to perform SFM work flows
 */
var $bo_act_SFM = new function bo_act_SFM(){

    /**
     * Function to Clone SFM
     * @param $sfmNameToBeCloned
     * @param $sfmName
     * @param $isCustom
     * @param $sfmTemplate
     * @param $sfmTemplateSaveAsName
     * @param $fieldName
     * @param $containerName
     */

this.cloneSFM = function($sfmNameToBeCloned,$sfmName,$isCustom,$sfmTemplate,$sfmTemplateSaveAsName,$fieldName,$containerName){

   $bo_pg_sfmTransactionAndDesigner.selectSFM($sfmNameToBeCloned, $isCustom);
   _click($bo_pg_sfmTransactionAndDesigner.btn_clone);
    
    _wait(60000, $bo_pg_sfmTransactionAndDesigner.txt_name);
    _setValue($bo_pg_sfmTransactionAndDesigner.txt_name, $sfmName);
    _setValue($bo_pg_sfmTransactionAndDesigner.txt_sfmTransactionId, "");
    _setValue($bo_pg_sfmTransactionAndDesigner.txt_sfmTransactionId, $sfmName);

    _click($bo_pg_sfmTransactionAndDesigner.btn_qualifyingCriteriaAndFieldMapping);
    _click($bo_pg_sfmTransactionAndDesigner.btn_screenDesigner);
    _wait(60000,_isVisible($bo_pg_sfmTransactionAndDesigner.lbl_workOrder));

    _setSelected($bo_pg_sfmTransactionAndDesigner.sel_sfmTemplate, $sfmTemplate);
    _setValue($bo_pg_sfmTransactionAndDesigner.txt_sfmSavePageLayoutAs, $sfmTemplateSaveAsName);
    _setValue($bo_pg_sfmTransactionAndDesigner.txt_sfmSavePageLayoutAsId, $sfmTemplateSaveAsName);
   
    $bo_pg_sfmTransactionAndDesigner.addField($fieldName, $containerName);
    
    _click($bo_pg_sfmTransactionAndDesigner.btn_quickSave);
   
    if(_exists($bo_pg_sfmTransactionAndDesigner.alert_sfm)){
	_focusWindow();
	_takeScreenShot();
	_click($bo_pg_sfmTransactionAndDesigner.btn_ok);
	_logExceptionAsFailure("Page not saved, refer screenshot for error");
	_click($bo_pg_sfmTransactionAndDesigner.btn_backToList);
	_click($bo_pg_sfmTransactionAndDesigner.btn_yes);
    }else{
	 _click($bo_pg_sfmTransactionAndDesigner.btn_saveAndclose);
    }
    _setSpeed(100);
};

}