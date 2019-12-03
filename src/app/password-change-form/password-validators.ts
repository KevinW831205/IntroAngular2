import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator{
    static cannotBeOldPassword(control: AbstractControl): Promise<ValidationErrors> | null{

        return null;
    }

    static notTheSamePassword(control: AbstractControl, expected: String): ValidationErrors | null{
        if(control.value === expected){
            return {notTheSamePassword: true}
        }
        return null;
    }
    
}