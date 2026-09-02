import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface User {
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive";
  initials: string;
}

@Component({
  selector: "app-settings",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./settings.component.html",
  styleUrl: "./settings.component.css",
})
export class SettingsComponent {
  activeTab = "General";

  tabs = [
    "General",
    "Store & Business",
    "Users & Roles",
    "Billing & Taxes",
    "Integrations",
  ];

  store = {
    name: "MediStore Pharmacy",
    code: "MED001",
    address:
      "No. 123, Main Road, Anna Nagar, Chennai - 600040, Tamil Nadu, India",
    phone: "+91 98765 43210",
    email: "info@medistore.com",
  };

  preferences = {
    currency: "Indian Rupee (₹)",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "12 Hour (AM/PM)",
    taxType: "Inclusive of Tax",
    defaultSaleType: "Retail",
    lowStockLevel: 10,
  };

  billing = {
    gstNumber: "33ABCDE1234F1Z5",
    billPrefix: "INV-",
    nextInvoice: "INV-2026-0021",
    roundOff: "2 Decimal Places",
    placeOfSupply: "Tamil Nadu (33)",
  };

  users: User[] = [
    {
      name: "Varunraj",
      role: "Administrator",
      email: "varunraj@medistore.com",
      status: "Active",
      initials: "VR",
    },
    {
      name: "Priya Sharma",
      role: "Pharmacist",
      email: "priya@medistore.com",
      status: "Active",
      initials: "PS",
    },
    {
      name: "Ramesh Kumar",
      role: "Sales Executive",
      email: "ramesh@medistore.com",
      status: "Active",
      initials: "RK",
    },
    {
      name: "Anitha Reddy",
      role: "Store Manager",
      email: "anitha@medistore.com",
      status: "Inactive",
      initials: "AN",
    },
  ];

  about = {
    applicationName: "MediStore",
    version: "v2.4.1",
    licenseType: "Premium",
    validUntil: "31 Dec 2026",
    supportEmail: "support@medistore.com",
    supportPhone: "+91 1800 123 4567",
  };

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  editStore(): void {
    console.log("Edit store details");
  }

  savePreferences(): void {
    console.log("Preferences saved", this.preferences);
  }

  saveBilling(): void {
    console.log("Billing settings saved", this.billing);
  }

  addUser(): void {
    console.log("Add new user");
  }

  editUser(user: User): void {
    console.log("Edit user:", user);
  }

  deleteUser(user: User): void {
    console.log("Delete user:", user);
  }

  viewAllUsers(): void {
    console.log("View all users");
  }

  checkForUpdates(): void {
    console.log("Checking for updates...");
  }
}
