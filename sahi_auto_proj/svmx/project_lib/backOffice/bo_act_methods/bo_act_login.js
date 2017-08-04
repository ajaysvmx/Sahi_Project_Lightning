
/**
 * Function to perform login work flows
 */
var $bo_act_login = new bo_act_login();
function bo_act_login(){

    /**
     * Function to login to salesforce
     * @param $url
     * @param $un
     * @param $pwd
     */
this.login = function($url,$un,$pwd){
    //Setting default values
    var $url = $url || $g_url;
    var $un = $un || $g_un;
    var $pwd = $pwd || $g_pwd;
_navigateTo($url);
_wait(60000, _isVisible($bo_pg_login.txt_email));
_setValue($bo_pg_login.txt_email, $un);
_setValue($bo_pg_login.txt_password, $pwd);
_click($bo_pg_login.btn_login);
};

}