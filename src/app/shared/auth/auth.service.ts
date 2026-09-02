import { Injectable, signal } from "@angular/core";

const AUTH_STORAGE_KEY = "medistore_authenticated";

@Injectable({ providedIn: "root" })
export class AuthService {
  private readonly authenticated = signal<boolean>(
    sessionStorage.getItem(AUTH_STORAGE_KEY) === "true",
  );

  isLoggedIn(): boolean {
    return this.authenticated();
  }

  login(): void {
    sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    this.authenticated.set(true);
  }

  logout(): void {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    this.authenticated.set(false);
  }
}
