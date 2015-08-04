var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/soleinsider/public/apps/menshoes/";
} else{
	var serviceURL = "http://soleinsider.com/public/apps/menshoes/";
}

var appConfig = {};
appConfig.base_url = serviceURL;
appConfig.name = "Mens Discount Shoes"
appConfig.version = "1";
appConfig.admin_url = 'app/'
appConfig.serviceURL = serviceURL;