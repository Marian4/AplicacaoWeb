app.directive('ngVerificaSubmit', function() {
           return {
                restrict: 'E',
                require: '^form',
                scope:{
                	submit:'&',
                },  
                template:'<button type="submit" class="btn btn-primary">enviar</button>',
                link: function($scope, $element, $attrs, formCtrl) {
                    $element.on('click', function() {
                        if (formCtrl.$valid) {
                        	$scope.submit();
                        }
                        else {
                            alert('Formulário inválido');
                        }
                    });
                }
            }   
        });
app.directive('ngBlur', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $element.on('blur', function() {
                if (ngModel.$invalid) {
                	$element.addClass('error');
                }
                else {
                    $element.removeClass('error');
               }
            });
        }
    }   
});
app.directive('ngInformaCep',function(CepService,$rootScope){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $scope.$watch($attrs.ngModel, function(value) {
                if (value) {
                    if (value.match(/^[0-9]{5}-[0-9]{3}$/ || /^[0-9]{8}$/)) {
                        CepService.get(value).then(function(response) {
                            console.log(response);
                            ngModel.$setValidity($attrs.ngModel, true);
                            $rootScope.$broadcast('cep', response.data);
                        });
                    }
                    else {
                        ngModel.$setValidity($attrs.ngModel, false);
                    }
                    
                }
                else {
                    ngModel.$setValidity($attrs.ngModel, false);
                }
                });
            }
        }
    });
