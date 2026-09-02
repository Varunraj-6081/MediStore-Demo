import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);
  private auth = inject(AuthService);

  private readonly apiUrl =
    "https://lightslategray-stingray-500941.hostingersite.com/api/test/users";

  showPassword = false;
  submitted = false;
  loginError = false;

  private readonly validUsername = "SuperAdmin";
  private readonly validPassword = "Super@Admin@2026";

  form = this.fb.nonNullable.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(6)]],
    remember: [false],
  });

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { username, password } = this.form.getRawValue();

    if (username !== this.validUsername || password !== this.validPassword) {
      this.loginError = true;
      return;
    }

    this.loginError = false;

    this.http.get(this.apiUrl).subscribe({
      next: (result) => console.log("API result:", result),
      error: (err) => console.error("API error:", err),
    });

    this.auth.login();
    this.router.navigate(["/dashboard"]);
  }
}
