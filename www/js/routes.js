angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.videoCoaching', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoaching.html',
        controller: 'videoCoachingCtrl'
      }
    }
  })

  .state('tabsController.videoCoachingHealth', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoachingHealth.html',
        controller: 'videoCoachingHealthCtrl'
      }
    }
  })

  .state('tabsController.videoHealthNachDerKur', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthNachDerKur.html',
        controller: 'videoHealthNachDerKurCtrl'
      }
    }
  })

  .state('tabsController.videoHealthHampel', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthHampel.html',
        controller: 'videoHealthHampelCtrl'
      }
    }
  })

  .state('tabsController.videoHealthDIEKUR', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthDIEKUR.html',
        controller: 'videoHealthDIEKURCtrl'
      }
    }
  })

  .state('tabsController.videoCoachingBusiness', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoachingBusiness.html',
        controller: 'videoCoachingBusinessCtrl'
      }
    }
  })

  .state('tabsController.videoCoachingBASIC', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoachingBASIC.html',
        controller: 'videoCoachingBASICCtrl'
      }
    }
  })

  .state('tabsController.videoStartertraining', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/videoStartertraining.html',
        controller: 'videoStartertrainingCtrl'
      }
    }
  })

  .state('tabsController.videoGOPRO', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/videoGOPRO.html',
        controller: 'videoGOPROCtrl'
      }
    }
  })

  .state('tabsController.videoPersNlichkeitsentwicklung', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/videoPersNlichkeitsentwicklung.html',
        controller: 'videoPersNlichkeitsentwicklungCtrl'
      }
    }
  })

  .state('tabsController.videoWorkshop', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/videoWorkshop.html',
        controller: 'videoWorkshopCtrl'
      }
    }
  })

  .state('tabsController.videoVergTungsplan', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/videoVergTungsplan.html',
        controller: 'videoVergTungsplanCtrl'
      }
    }
  })

  .state('tabsController.audio', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/audio.html',
        controller: 'audioCtrl'
      }
    }
  })

  .state('tabsController.audioBusiness', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/audioBusiness.html',
        controller: 'audioBusinessCtrl'
      }
    }
  })

  .state('tabsController.audioHealth', {
    url: '/page16',
    views: {
      'tab2': {
        templateUrl: 'templates/audioHealth.html',
        controller: 'audioHealthCtrl'
      }
    }
  })

  .state('tabsController.konzepte', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/konzepte.html',
        controller: 'konzepteCtrl'
      }
    }
  })

  .state('tabsController.beHealthy', {
    url: '/page18',
    views: {
      'tab3': {
        templateUrl: 'templates/beHealthy.html',
        controller: 'beHealthyCtrl'
      }
    }
  })

  .state('tabsController.beBeauty', {
    url: '/page19',
    views: {
      'tab3': {
        templateUrl: 'templates/beBeauty.html',
        controller: 'beBeautyCtrl'
      }
    }
  })

  .state('tabsController.beBusiness', {
    url: '/page20',
    views: {
      'tab3': {
        templateUrl: 'templates/beBusiness.html',
        controller: 'beBusinessCtrl'
      }
    }
  })

  .state('tabsController.nTzliches', {
    url: '/page10',
    views: {
      'tab5': {
        templateUrl: 'templates/nTzliches.html',
        controller: 'nTzlichesCtrl'
      }
    }
  })

  .state('tabsController.gabiSteiner', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/gabiSteiner.html',
        controller: 'gabiSteinerCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.einladungen', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/einladungen.html',
        controller: 'einladungenCtrl'
      }
    }
  })

  .state('tabsController.termine', {
    url: '/page17',
    views: {
      'tab4': {
        templateUrl: 'templates/termine.html',
        controller: 'termineCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('verification', {
    url: '/verification',
    templateUrl: 'templates/verification.html',
    controller: 'verificationCtrl'
  })

  .state('registrieren', {
    url: '/registrieren',
    templateUrl: 'templates/registrieren.html',
    controller: 'registrierenCtrl'
  })

  .state('tabsController.logout', {
    url: '/logout',
    views: {
      'tab1': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

  .state('impressum', {
    url: '/impressum',
    templateUrl: 'templates/impressum.html',
    controller: 'impressumCtrl'
  })

  .state('datenschutzerklaerung', {
    url: '/datenschutzerklaerung',
    templateUrl: 'templates/datenschutzerklaerung.html',
    controller: 'datenschutzerklaerungCtrl'
  })

$urlRouterProvider.otherwise('/login')


});