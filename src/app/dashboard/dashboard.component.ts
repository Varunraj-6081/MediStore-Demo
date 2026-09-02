import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, SidebarComponent, TopbarComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {
  salesData = [
    { day: "22 May", value: 2500 },
    { day: "23 May", value: 5200 },
    { day: "24 May", value: 15000 },
    { day: "25 May", value: 20000 },
    { day: "26 May", value: 13000 },
    { day: "27 May", value: 18000 },
    { day: "28 May", value: 15500 },
  ];

  purchaseData = [
    { day: "22 May", value: 5200 },
    { day: "23 May", value: 7600 },
    { day: "24 May", value: 21500 },
    { day: "25 May", value: 19500 },
    { day: "26 May", value: 10500 },
    { day: "27 May", value: 18000 },
    { day: "28 May", value: 7800 },
  ];

  paymentMethods = [
    {
      name: "Cash",
      amount: 185420,
      percentage: 53.6,
      class: "cash",
    },
    {
      name: "UPI",
      amount: 98750,
      percentage: 28.6,
      class: "upi",
    },
    {
      name: "Card",
      amount: 45230,
      percentage: 13.1,
      class: "card",
    },
    {
      name: "Credit",
      amount: 16278,
      percentage: 4.7,
      class: "credit",
    },
  ];

  topMedicines = [
    {
      name: "Paracetamol 500mg",
      units: 1250,
      sales: 15625,
    },
    {
      name: "Azithromycin 500mg",
      units: 860,
      sales: 55900,
    },
    {
      name: "Cetirizine 10mg",
      units: 720,
      sales: 12960,
    },
    {
      name: "Ibuprofen 400mg",
      units: 650,
      sales: 9750,
    },
    {
      name: "Omeprazole 20mg",
      units: 540,
      sales: 15120,
    },
  ];

  lowStockItems = [
    {
      name: "Paracetamol 500mg",
      stock: 148,
      reorder: 200,
      level: "critical",
    },
    {
      name: "Azithromycin 500mg",
      stock: 89,
      reorder: 150,
      level: "critical",
    },
    {
      name: "Cetirizine 10mg",
      stock: 76,
      reorder: 120,
      level: "critical",
    },
    {
      name: "Amoxicillin 500mg",
      stock: 45,
      reorder: 100,
      level: "warning",
    },
    {
      name: "Salbutamol 100mcg",
      stock: 35,
      reorder: 80,
      level: "warning",
    },
  ];

  expiringItems = [
    {
      name: "Pantoprazole 40mg",
      expiry: "22/09/2026",
      days: 4,
      stock: 25,
      value: 550,
    },
    {
      name: "Ibuprofen 400mg",
      expiry: "25/09/2026",
      days: 7,
      stock: 30,
      value: 450,
    },
    {
      name: "Vitamin C 500mg",
      expiry: "05/10/2026",
      days: 18,
      stock: 40,
      value: 400,
    },
    {
      name: "Omeprazole 20mg",
      expiry: "10/10/2026",
      days: 23,
      stock: 60,
      value: 1680,
    },
    {
      name: "Salbutamol 100mcg",
      expiry: "12/11/2026",
      days: 55,
      stock: 35,
      value: 1925,
    },
  ];

  formatCurrency(value: number): string {
    return value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  viewInventory(): void {
    console.log("Navigate to Inventory");
  }

  viewLowStock(): void {
    console.log("Navigate to Low Stock");
  }

  viewExpiry(): void {
    console.log("Navigate to Expiry Alerts");
  }

  viewReports(): void {
    console.log("Navigate to Reports");
  }
}
