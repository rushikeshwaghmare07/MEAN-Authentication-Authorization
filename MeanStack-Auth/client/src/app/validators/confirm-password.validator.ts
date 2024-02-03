import { FormGroup } from "@angular/forms"

export const confirmPasswordValidators = (controlName: string, controlNameToMatch: string)=> {
    return (fromGroup: FormGroup)=> {
        let control = fromGroup.controls[controlName];
        let controlToMatch = fromGroup.controls[controlNameToMatch];
    }
}