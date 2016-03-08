'use strict';

var apps=angular.module('portfolios');
  apps.controller('HomeCtrl', function ($scope) {

  	$scope.postlogo="ACHRAF BENAOMAR";
		$scope.postbehind="A";
		$scope.title1="Développeur Mobile";
		$scope.title2="& Web";

/*
    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });
*/
  });


apps.controller('Section1Controller', function ($scope,$log) {

      $scope.titresection="Développeur frontend & backend";
      $scope.image='.client/assets/images/avatar.jpg';
      $scope.lefttitle="ACHRAF BENAOMAR 2016";
      $scope.paragraphe="Achraf benomar ,Développeur frontend, qui développe des sites vitrines sous WordPress et des dernières techniques web : HTML5/CSS3, jQuery, jQuery UI,NodeJs,AngularJs.";
  
  $scope.animateElementIn = function($el) {
    $el.removeClass('hidden');

    if($el){

    $('.section-title').addClass('animated fadeInLeft');
    $('.line-section').addClass('animated fadeInLeft');
    $('.section-contenue').addClass('animated fadeIn');
    $('.section-thumb').addClass('animated fadeIn');

    }
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');

     if($el){

    $('.section-title').removeClass('animated fadeInLeft');
    $('.line-section').removeClass('animated fadeInLeft');
    $('.section-contenue').removeClass('animated fadeIn');
    $('.section-thumb').removeClass('animated fadeIn');
   
    }
    
  };
  });


apps.controller("Section2Controller",function($scope,$log){

  $scope.ansexp="3";
  $scope.exptitle="Ans d'expérience";
  $scope.paragraphe2="Achraf Benomar,j'ai commencé le développement web et le web design pour développer un petit site perso  et c'est rapidement devenu une vraie vocation. Jaime expérimenter, découvrir et apprendre au fur et à mesure de mes projets pros et perso.";

$scope.animateElementIn = function($el) {
    $el.removeClass('hidden');

    if($el){

    $('.title-section2').addClass('animated fadeInLeft');
    $('.exp-title').addClass('animated fadeIn');
    $('.line-section2').addClass('animated fadeInLeft');
    $('.aboutme-section2').addClass('animated fadeIn');

    }
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');

     if($el){

   $('.title-section2').removeClass('animated fadeInLeft');
    $('.exp-title').removeClass('animated fadeIn');
    $('.line-section2').removeClass('animated fadeInLeft');
    $('.aboutme-section2').removeClass('animated fadeIn');
   
    }
    
  };

});



apps.controller("Section3Controller",function($scope,$log){
  
  $scope.titlework="Mes projets sélectionnés";
  $scope.firsttitle="Mobile";
  $scope.sujetwork="Application mobile d’achat de coupon de réduction";
  $scope.sujetworks="Le projet Profiteo propose d'acheter des bons d'achat (coupons) via des applications Kiosk disponible dans les centres       commerciaux, l'application mobile  a pour but de faciliter l'achat des coupons directement depuis le mobile de l'utilisateur sans se déplacer au centre commercial. Elle permet également de générer des coupons électroniques (Passbook) et de pouvoir les valider via un code bar unique lors du passage du client à la caisse.";
  $scope.titledate="ACHRAF BENAOMAR 2016"


$scope.animateElementIn = function($el) {
    $el.removeClass('hidden');

    if($el){

    $('.title-work').addClass('animated fadeInLeft');
    $('.border-works').addClass('animated fadeIn');
    $('.first-title').addClass('animated fadeIn');
    $('.sujet-work').addClass('animated fadeIn');
    $('.sujet-works').addClass('animated fadeIn');
    $('.thumbs').addClass('animated fadeInLeft');
    $('.thumb').addClass('animated fadeInRight');
    }
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');

     if($el){

    $('.title-work').removeClass('animated fadeInLeft');
    $('.border-works').removeClass('animated fadeIn');
    $('.first-title').removeClass('animated fadeIn');
    $('.sujet-work').removeClass('animated fadeIn');
    $('.sujet-works').removeClass('animated fadeIn');
    $('.thumbs').removeClass('animated fadeInLeft');
    $('.thumb').removeClass('animated fadeInRight');
   
    }
    
  };


});



apps.controller("FoooterController",function($scope,$log){

  $scope.msgtitle="Joignez-vous à ma liste de courrier électronique privé ou envoyez-moi un e-mail.";
  $scope.facebook="Facebook";
  $scope.google="google";
  $scope.linkedin="Linkedin";
  $scope.thanks="Merci";
  

  $scope.animateElementIn = function($el) {
    $el.removeClass('hidden');

    if($el){

    $('.msg-title').addClass('animated fadeInLeft');
    $('.media').addClass('animated fadeIn');
    $('#thanks').addClass('animated fadeIn');

    }
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');

     if($el){

    $('.msg-title').removeClass('animated fadeInLeft');
    $('.media').removeClass('animated fadeIn');
    $('#thanks').removeClass('animated fadeIn');
  
   
    }
    
  };

 $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
});






