app.controller("controller", function($scope){
			$scope.ocorrencias = [];
			$scope.adiciona=function(ocorrencia){
				$scope.ocorrencias.push(angular.copy(ocorrencia));
			};
		});