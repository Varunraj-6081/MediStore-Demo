import { Routes } from "@angular/router";
import { authGuard } from "./shared/auth/auth.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./login/login.component").then((m) => m.LoginComponent),
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./dashboard/dashboard.component").then(
        (m) => m.DashboardComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: "reports",
    loadComponent: () =>
      import("./reports/reports.component").then((m) => m.ReportsComponent),
    canActivate: [authGuard],
  },
  {
    path: "medicine",
    loadComponent: () =>
      import("./medicine/medicine.component").then((m) => m.MedicineComponent),
    canActivate: [authGuard],
  },
  {
    path: "sales",
    loadComponent: () =>
      import("./sales/sales.component").then((m) => m.SalesComponent),
    canActivate: [authGuard],
  },
  {
    path: "purchase",
    loadComponent: () =>
      import("./purchase/purchase.component").then((m) => m.PurchaseComponent),
    canActivate: [authGuard],
  },
  {
    path: "inventory",
    loadComponent: () =>
      import("./inventory/inventory.component").then(
        (m) => m.InventoryComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: "suppliers",
    loadComponent: () =>
      import("./suppliers/suppliers.component").then(
        (m) => m.SuppliersComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: "customers",
    loadComponent: () =>
      import("./customer/customer.component").then((m) => m.CustomersComponent),
    canActivate: [authGuard],
  },
  {
    path: "expiry-alerts",
    loadComponent: () =>
      import("./expiryalerts/expiryalerts.component").then(
        (m) => m.ExpiryAlertsComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: "settings",
    loadComponent: () =>
      import("./settings/settings.component").then((m) => m.SettingsComponent),
    canActivate: [authGuard],
  },
  { path: "**", redirectTo: "" },
];
