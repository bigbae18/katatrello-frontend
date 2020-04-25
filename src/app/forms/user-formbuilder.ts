import { FormBuilder, Validators } from '@angular/forms';

export class UserFormBuilder {

    constructor(private fb: FormBuilder) { }
    
    userForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]] 
    })
}