var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "010-5148-1895";
    	$rootScope.dns = "safebreaking@naver.com";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "박 경 진";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/parkkyoungjin.pdf", 
			 title: "Team",
			 name: "Project",
			 img: "team/portfolio1.JPG",
			 img2: "team/portfolio1.JPG",
			 type : true, 
			 contents: "UI 과정에서 배운 싱글 페이지 전환, 테이블 작성, CSS 효과를 최소 한번씩은 사용하기 위한 작업을 했고 그 과정에서 자연스럽게 이해도를 높일 수 있었으며, 팀으로 작업하는 과정에서 여러 시행 착오를 통해 협업에 필요한 세부적인 기술 습득이 가능했습니다. 사람의 허영심에 대한 부정적 혹은 긍정적 인상에 대해서 평소 가지고 있던 생각을 Vanity Fair 서비스 철학에 담을 수 있어 흡족했습니다. 부연 하자면, 타인을 의식한 허영심, 자기 만족을 위한 허영심 모두에 대해서 그 단어에서 느껴지는 부정적인 측면 보다는 긍정적인 측면에 더 집중하면 새로운 시각을 가질 수 있을 것이라 생각했고, 이를 수익화 한다면 이런 형태일 것으로 판단했습니다."
			},{
			 path: "portfolio/",
			 url : "personal/kyoungjinpark.pdf", 
			 title: "Personal",
			 name: "Project",
			 img: "personal/page1.JPG",
			 img2: "personal/page3.jpg",
			 type : false,
			 contents: "각종 Analytics의 발달로 한결 쉬워진 데이터 분석의 시대에서 생각한 세가지 (직접 선별한 마블 캐릭터 Google 검색량 데이터를 하둡 분산 파일 시스템으로 정제할 수 있는가? 선별된 키워드의 검색량 변화를 데이터 전, 후 처리를 통해 시각화 할 수 있는가? 스프링 프레임웍 안에서 마블(MCU) 소개 웹 페이지를 구현 할 수 있는가?)를 개발 동기로 프로젝트를 진행했습니다."
			},{
			 path: "https://www.youtube.com/embed/",
			 url : "l8_Q2m-Dapk", 
			 title: "Personal",
			 name: "Presentation",
             img: "personal/media.jpg",
			 img2: "personal/media.jpg",
			 type : false, 
			 contents: ""
			},{
			 path: "https://www.dropbox.com/s/",
			 url : "gxst36l7il97e0c/demo1.mp4?dl=0", 
			 title: "Team",
			 name: "Demo",
             img: "team/teamdemo.jpg",    
			 img2: "team/teamdemo.jpg",
			 type : true, 
			 contents: ""
			},{
			 path: "https://www.dropbox.com/s/",
			 url : "7yln4m1kn0698kt/demo2.mp4?dl=0", 
			 title: "Personal",
			 name: "Demonstration",
             img: "personal/personaldemo.jpg",
			 img2: "personal/personaldemo.jpg",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
