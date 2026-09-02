import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
  navItems = [
    { label: "Dashboard", icon: "dashboard", route: "/dashboard" },
    { label: "Customers", icon: "users", route: "/customers" },
    { label: "Suppliers", icon: "truck", route: "/suppliers" },
    { label: "Inventory", icon: "archive", route: "/inventory" },
    { label: "Medicine", icon: "pill", route: "/medicine" },
    { label: "Purchase", icon: "bag", route: "/purchase" },
    { label: "Sales", icon: "cart", route: "/sales" },
    { label: "Reports", icon: "chart", route: "/reports" },
    { label: "Expiry Alerts", icon: "alert", route: "/expiry-alerts" },
    { label: "Settings", icon: "settings", route: "/settings" },
  ];
}
