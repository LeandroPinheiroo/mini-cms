import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(private router: Router) { }

  handle(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string') {
       msg = errorResponse;
    } else if (errorResponse instanceof Response
             && errorResponse.status >= 400 && errorResponse.status <= 499) {
        let errors;
        msg = 'Ocorreu um erro ao processar a sua solicitação';
        try {
             errors = errorResponse.json();
             msg = errors[0].mensagemUsuario;
        } catch (e) { }
         console.error('Ocorreu um erro', errorResponse);
    } else if ( (errorResponse instanceof HttpErrorResponse )
                 && errorResponse.status >= 400 && errorResponse.status <= 499) {

        let errors: any;
        msg = 'Ocorreu um erro ao processar a sua solicitação';

        if (errorResponse.status === 403) {
           msg = 'Você não tem permissão para executar esta ação';
        }

        if ( (errorResponse.status === 401) &&
             (errorResponse.error.error_description.includes('Invalid refresh token'))) {
           msg = 'Sua sessão expirou, faça login novamente.';
           this.router.navigate(['/login']);
        }
        try {
              errors = errorResponse.error;

              msg = errors[0].mensagemUsuario;
        } catch (e) { }

        console.error('Ocorreu um erro', errorResponse);
    } else {
         msg = 'Erro ao processar serviço remoto. Tente novamente.';
         console.error('Ocorreu um erro', errorResponse);
    }
  }


}