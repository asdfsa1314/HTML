
(function(exports){var new_form_action='https://security.kaixin001.com/login/login_post.php';var resetFormAction=function(lForm)
{if(lForm.action)
{var old_form_action=lForm.action;}
else if(lForm.attr&&typeof lForm.attr=='function')
{var old_form_action=lForm.attr('action');}
else
{return;}
var qpos=old_form_action.indexOf('?');if(qpos!=-1)
{new_form_action+=old_form_action.substr(qpos);}
if(lForm.attr&&typeof lForm.attr=='function')
{lForm.attr('action',new_form_action);}
else
{lForm.action=new_form_action;}}
exports.EnLogin=function(k,lForm,err_fn,notice_fn,succ_fn)
{this.para={}
resetFormAction(lForm);}
EnLogin.prototype.setPreLoginFn=function(cb_fn)
{}
exports.EnFormLogin=function(k,lForm,err_fn,notice_fn,succ_fn)
{this.para={}
resetFormAction(lForm);}
EnFormLogin.prototype.setPreLoginFn=function(cb_fn)
{}})(window);