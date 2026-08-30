import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

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

  private readonly apiUrl =
    "https://lightslategray-stingray-500941.hostingersite.com/api/test/users";

  showPassword = false;
  submitted = false;

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

    this.http.get(this.apiUrl).subscribe({
      next: (result) => console.log("API result:", result),
      error: (err) => console.error("API error:", err),
    });

    this.router.navigate(["/dashboard"]);
  }
}
