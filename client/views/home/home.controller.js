'use strict';

var apps=angular.module('portfolios');
  apps.controller('HomeCtrl', function ($scope) {

  	$scope.postlogo="ACHRAF BENAOMAR";
		$scope.postbehind="A";
		$scope.title1="Développeur Mobile";
		$scope.title2="& Web";

    $scope.titresection="Développeur frontend & backend";
    $scope.image='.client/assets/images/avatar.jpg';
    $scope.lefttitle="ACHRAF BENAOMAR 2016";
    $scope.paragraphe="Achraf benomar ,Développeur frontend, qui développe des sites vitrines sous WordPress et des dernières techniques web : HTML5/CSS3, jQuery, jQuery UI,NodeJs,AngularJs.";

    $scope.ansexp="3";
    $scope.exptitle="Ans d'expérience";
    $scope.paragraphe2="Achraf Benomar,j'ai commencé le développement web et le web design pour développer un petit site perso  et c'est rapidement devenu une vraie vocation. Jaime expérimenter, découvrir et apprendre au fur et à mesure de mes projets pros et perso.";

    $scope.titlework="Mes projets sélectionnés";
    $scope.firsttitle="Mobile";
    $scope.sujetwork="Application mobile d’achat de coupon de réduction";
    $scope.sujetworks="Le projet Profiteo propose d'acheter des bons d'achat (coupons) via des applications Kiosk disponible dans les centres       commerciaux, l'application mobile  a pour but de faciliter l'achat des coupons directement depuis le mobile de l'utilisateur sans se déplacer au centre commercial. Elle permet également de générer des coupons électroniques (Passbook) et de pouvoir les valider via un code bar unique lors du passage du client à la caisse.";
    $scope.titledate="ACHRAF BENAOMAR 2016";


    $scope.msgtitle="Joignez-vous à ma liste de courrier électronique privé ou envoyez-moi un e-mail.";
    $scope.facebook="Facebook";
    $scope.google="google";
    $scope.linkedin="Linkedin";
    $scope.thanks="Merci";
/*
    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });
*/

 $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });

  });




  









