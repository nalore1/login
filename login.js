var app = angular.module('login',[]); //estandar para comenzar angular

app.controller('ctrlLogin', function ($scope) { //con esto creamos un controlador

        $scope.mostrarLogin = true;
        $scope.mostrarError = false;
        $scope.mensaje = "";
    
    
    
        $scope.hola = function() {
    
    
    
            if( $scope.modelUsuario == "" &&  $scope.modelPassword=="" ){
                    $scope.mensaje = "Ingrese datos";
                    return ;
    
            }    
            if( $scope.modelUsuario == "admin" &&  $scope.modelPassword=="123456" ){
                    $scope.mostrarError = false;
                    $scope.mostrarLogin = false;    
            }else{
                    $scope.mostrarError = true;
                    $scope.mostrarLogin = true;
                    $scope.mensaje = "Usuario y/o Clave incorrectos";
                }
    
            
    
        };
    
    });