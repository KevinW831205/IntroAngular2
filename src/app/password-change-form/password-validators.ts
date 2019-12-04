import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator{
    static cannotBeOldPassword(control: AbstractControl): Promise<ValidationErrors> | null{
        return new Promise((resolve) =>{
            if(control.value !== '1234'){
                resolve({ invalidOldPassword: true });
            } else {
                resolve(null)
            }
        });
    }

    static notTheSamePassword(control: AbstractControl): ValidationErrors | null{
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value){
            return { passwordDontMatch: true};
        }

        return null;
    }
    
}