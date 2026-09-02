import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

@Component({
  selector: "app-reports",
  standalone: true,
  imports: [CommonModule, SidebarComponent, TopbarComponent],
  templateUrl: "./reports.component.html",
  styleUrl: "./reports.component.css",
})
export class ReportsComponent {
  selectedRange = "26 May 2026 - 28 May 2026";

  summaryCards = [
    {
      title: "Total Sales",
      value: "₹3,45,678",
      change: "15.2%",
      icon: "🛒",
      type: "green",
    },
    {
      title: "Total Purchases",
      value: "₹2,45,320",
      change: "12.8%",
      icon: "🛒",
      type: "blue",
    },
    {
      title: "Total Profit",
      value: "₹1,00,358",
      change: "18.7%",
      icon: "↗",
      type: "purple",
    },
    {
      title: "Total Stock Value",
      value: "₹12,45,680",
      change: "9.4%",
      icon: "▣",
      type: "orange",
    },
    {
      title: "New Customers",
      value: "128",
      change: "8.6%",
      icon: "♙",
      type: "red",
    },
    {
      title: "Total Invoices",
      value: "1,245",
      change: "11.3%",
      icon: "▤",
      type: "teal",
    },
  ];

  salesData = [
    { date: "22 May", value: 3000 },
    { date: "23 May", value: 5500 },
    { date: "24 May", value: 16000 },
    { date: "25 May", value: 21000 },
    { date: "26 May", value: 13500 },
    { date: "27 May", value: 19000 },
    { date: "28 May", value: 16500 },
  ];

  purchaseData = [
    { date: "22 May", value: 5000 },
    { date: "23 May", value: 8000 },
    { date: "24 May", value: 19500 },
    { date: "25 May", value: 16000 },
    { date: "26 May", value: 8000 },
    { date: "27 May", value: 19500 },
    { date: "28 May", value: 10500 },
  ];

  paymentMethods = [
    {
      name: "Cash",
      amount: "₹1,85,420",
      percentage: "53.6%",
      class: "cash",
    },
    {
      name: "UPI",
      amount: "₹98,750",
      percentage: "28.6%",
      class: "upi",
    },
    {
      name: "Card",
      amount: "₹45,230",
      percentage: "13.1%",
      class: "card",
    },
    {
      name: "Credit",
      amount: "₹16,278",
      percentage: "4.7%",
      class: "credit",
    },
  ];

  reports = [
    {
      title: "Sales Summary Report",
      description: "Detailed summary of sales, revenue and payment collection.",
      icon: "▥",
      type: "green",
    },
    {
      title: "Product Performance Report",
      description:
        "Top selling and slow moving medicines by quantity and value.",
      icon: "▣",
      type: "purple",
    },
    {
      title: "Purchase Summary Report",
      description:
        "Summary of purchases by supplier, category and time period.",
      icon: "▤",
      type: "blue",
    },
    {
      title: "Inventory Status Report",
      description: "Current stock levels, stock value and stock movement.",
      icon: "▣",
      type: "orange",
    },
    {
      title: "Customer Ledger Report",
      description: "Customer-wise ledger, outstanding and payment history.",
      icon: "♙",
      type: "red",
    },
    {
      title: "Supplier Ledger Report",
      description: "Supplier-wise ledger, outstanding and payment history.",
      icon: "▰",
      type: "teal",
    },
    {
      title: "Expiry Report",
      description: "Medicines expiring soon and expired items report.",
      icon: "⚠",
      type: "orange",
    },
    {
      title: "Stock Movement Report",
      description: "Stock in, stock out and overall movement analysis.",
      icon: "↔",
      type: "blue",
    },
    {
      title: "Profit & Loss Report",
      description: "Profit and loss statement for the selected period.",
      icon: "↗",
      type: "green",
    },
    {
      title: "Tax Summary Report",
      description: "GST summary, tax collected and tax paid report.",
      icon: "▤",
      type: "purple",
    },
    {
      title: "Payment Summary Report",
      description: "Summary of payments received by mode and time period.",
      icon: "▣",
      type: "red",
    },
    {
      title: "Day Book Report",
      description: "Day book summary of all transactions for the period.",
      icon: "▦",
      type: "blue",
    },
  ];

  exportReport(): void {
    console.log("Exporting report...");
  }

  selectDateRange(): void {
    console.log("Date range selected");
  }

  openReport(report: any): void {
    console.log("Opening report:", report.title);
  }
}
