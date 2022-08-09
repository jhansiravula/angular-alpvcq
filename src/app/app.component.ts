import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    phonenumber: [""],
    check: [false]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm.get("check").valueChanges.subscribe(value => {
      if (value) {
        this.loginForm.get("phonenumber").setValidators([Validators.required]);
      } else {
        this.loginForm.get("phonenumber").clearValidators();
      }
      this.loginForm
        .get("phonenumber")
        .updateValueAndValidity({ emitEvent: false });
      console.log(this.loginForm.valid);
    });
  }

  loginUser() {}
}
