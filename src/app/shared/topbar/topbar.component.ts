import { Component, ElementRef, HostListener, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-topbar",
  standalone: true,
  templateUrl: "./topbar.component.html",
  styleUrl: "./topbar.component.css",
})
export class TopbarComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private elementRef = inject(ElementRef);

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener("document:click", ["$event"])
  closeMenuOnOutsideClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }

  signOut(): void {
    this.menuOpen = false;
    this.auth.logout();
    this.router.navigate(["/"]);
  }
}
