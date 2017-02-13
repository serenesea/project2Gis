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
				nameBus: 'name Business',
				nameEmail: 'name Email',
				numHome: 'number House',
				numPhone: 'number Telphone',
				nameStreet: 'name Street',
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
				nameEmail: 'Ваш Email',
				numHome: 'номер Дома',
				numPhone: 'номер Телефона',
				nameStreet: 'название Улицы',
				home: 'Главная',
				registration: 'Регистрация',
				terms: 'Особые условия',
				rubricator: 'Рубрикатор',
				contacts: 'Контакты',
				about: 'О нас',

			},
			FRA : {
				region: 'FRA region',
				city:'FRA город',
				category:'FRA Category',
				dir:'ltr',
				nameBus: 'FRA name Business',
				nameEmail: 'FRA name Email',
				numHome: 'FRA number House',
				numPhone: 'FRA number Telphone',
				nameStreet: 'FRA name Street',
				home: 'HomeFRA',
				registration: 'RegistratFRA',
				terms: 'Terms and conditFRA',
				rubricator: 'RubricaFRA',
				contacts: 'ContaFRA',
				about: 'AboutFRA',

			},
			HEB : {
				region: 'HEB region',
				city:'HEB город',
				category:'HEB Category',
				dir:'rtl',
				extra_val_dir: 'ltr',
				nameBus: 'HEB name Business',
				nameEmail: 'HEB name Email',
				numHome: 'HEB number House',
				numPhone: 'HEB number Telphone',
				nameStreet: 'HEB name Street',
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