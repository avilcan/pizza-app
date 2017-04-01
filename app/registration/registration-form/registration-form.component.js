function registrationFormCtrl(){
	this.user = "";
}
module.exports = {
	template: require('./registration-form.template.html'),
	controller: registrationFormCtrl
}
