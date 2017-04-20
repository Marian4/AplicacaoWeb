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
