/* global angular */
(function(angular){
	'use strict';
	LanguageService.$inject = [];
	function LanguageService() {
		var me = this;

		return {
			ENG : {
				region: 'Region',
				city:'City',
				category:'Category',
				dir:'ltr',
				nameBus: 'Company name',
				nameEmail: 'Email',
				numHome: 'Building',
				numPhone: 'Telephone',
				nameStreet: 'Street',
				home: 'Home',
				registration: 'Registration',
				terms: 'Terms and conditions',
				rubricator: 'Rubricator',
				contacts: 'Contacts',
				about: 'About',

			},
			RUS : {
				region: 'Регион',
				city:'Город',
				category:'Категория',
				dir:'ltr',
				nameBus: 'название Компании',
				nameEmail: 'Email',
				numHome: 'Дом',
				numPhone: 'Телефон',
				nameStreet: 'Улица',
				home: 'Главная',
				registration: 'Регистрация',
				terms: 'Особые условия',
				rubricator: 'Рубрикатор',
				contacts: 'Контакты',
				about: 'О нас',

			},
			FRA : {
				region: 'FRA region',
				city:'FRA city',
				category:'FRA Category',
				dir:'ltr',
				nameBus: 'FRA Company name',
				nameEmail: 'FRA Email',
				numHome: 'FRA Building',
				numPhone: 'FRA Teltphone',
				nameStreet: 'FRA Street',
				home: 'HomeFRA',
				registration: 'RegistratFRA',
				terms: 'Terms and conditFRA',
				rubricator: 'RubricaFRA',
				contacts: 'ContaFRA',
				about: 'AboutFRA',

			},
			HEB : {
				region: 'HEB region',
				city:'HEB city',
				category:'HEB Category',
				dir:'rtl',
				extra_val_dir: 'ltr',
				nameBus: 'HEB Company name',
				nameEmail: 'HEB Email',
				numHome: 'HEB Building',
				numPhone: 'HEB Telephone',
				nameStreet: 'HEB Street',
				home: 'HomeHEB',
				registration: 'RegistratHEB',
				terms: 'Terms and conditiHEB',
				rubricator: 'RubricaHEB',
				contacts: 'ContaHEB',
				about: 'AboutHEB',

			}
		};

	}

	angular.module('MyApp').service("LanguageService", LanguageService);

})(angular);