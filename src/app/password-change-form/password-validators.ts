import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator{
    static cannotBeOldPassword(control: AbstractControl): Promise<ValidationErrors> | null{

        return null;
    }

    static notTheSamePassword(control: AbstractControl): ValidationErrors | null{

        return null;
    }
    
}