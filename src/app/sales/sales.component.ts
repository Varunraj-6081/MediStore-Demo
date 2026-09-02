import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface SaleItem {
  id: number;
  medicine: string;
  brand: string;
  batch: string;
  expiry: string;
  qty: number;
  price: number;
  discount: number;
}

interface Invoice {
  invoice: string;
  customer: string;
  amount: number;
  date: string;
  status: string;
}

@Component({
  selector: "app-sales",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./sales.component.html",
  styleUrl: "./sales.component.css",
})
export class SalesComponent {
  showNewSale = true;

  selectedCustomer = "Ramesh Kumar (CUS1001)";

  discount = 0;

  note = "";

  searchMedicine = "";

  saleItems: SaleItem[] = [
    {
      id: 1,
      medicine: "Paracetamol 500mg",
      brand: "Crocin",
      batch: "PCT50023",
      expiry: "05/2026",
      qty: 2,
      price: 12.5,
      discount: 0,
    },
    {
      id: 2,
      medicine: "Azithromycin 500mg",
      brand: "Azee 500",
      batch: "AZT5024",
      expiry: "08/2026",
      qty: 1,
      price: 65,
      discount: 0,
    },
    {
      id: 3,
      medicine: "Cetirizine 10mg",
      brand: "Cetzine",
      batch: "CTZ1023",
      expiry: "11/2025",
      qty: 1,
      price: 18,
      discount: 0,
    },
  ];

  invoices: Invoice[] = [
    {
      invoice: "INV-2026-0019",
      customer: "Ramesh Kumar",
      amount: 108,
      date: "Today, 11:30 AM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0018",
      customer: "Walk-in Customer",
      amount: 892.5,
      date: "Today, 10:15 AM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0017",
      customer: "Priya Sharma",
      amount: 248,
      date: "Today, 09:45 AM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0016",
      customer: "Suresh N",
      amount: 567.3,
      date: "Yesterday, 07:20 PM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0015",
      customer: "Walk-in Customer",
      amount: 156,
      date: "Yesterday, 06:10 PM",
      status: "Paid",
    },
  ];

  get subtotal(): number {
    return this.saleItems.reduce((total, item) => {
      return total + item.qty * item.price;
    }, 0);
  }

  get discountAmount(): number {
    return this.subtotal * (this.discount / 100);
  }

  get taxAmount(): number {
    return 0;
  }

  get grandTotal(): number {
    return this.subtotal - this.discountAmount + this.taxAmount;
  }

  increaseQty(item: SaleItem): void {
    item.qty++;
  }

  decreaseQty(item: SaleItem): void {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  removeItem(item: SaleItem): void {
    this.saleItems = this.saleItems.filter(
      (medicine) => medicine.id !== item.id,
    );
  }

  clearCart(): void {
    this.saleItems = [];
  }

  addMedicine(): void {
    console.log("Add medicine");
  }

  scanBarcode(): void {
    console.log("Scan barcode");
  }

  viewInvoice(invoice: Invoice): void {
    console.log("View invoice:", invoice.invoice);
  }

  printInvoice(invoice: Invoice): void {
    console.log("Print invoice:", invoice.invoice);

    // Temporary print action
    window.print();
  }

  newSale(): void {
    this.showNewSale = true;
  }

  showPaymentModal = false;

  paymentMethod = "Cash";
  amountReceived: number | null = null;

  paymentMethods = ["Cash", "UPI", "Debit Card", "Credit Card", "Others"];

  get changeAmount(): number {
    const received = this.amountReceived ?? 0;
    return Math.max(0, received - this.grandTotal);
  }

  processSale(): void {
    if (this.saleItems.length === 0) {
      alert("Please add at least one medicine.");
      return;
    }

    this.amountReceived = this.grandTotal;
    this.paymentMethod = "Cash";

    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
  }

  confirmPayment(): void {
    const received = this.amountReceived ?? 0;

    if (received < this.grandTotal) {
      alert("Amount received is less than the total amount.");
      return;
    }

    // For now just complete the sale.
    // Later this will call the backend API.
    console.log("Payment completed:", {
      customer: this.selectedCustomer,
      items: this.saleItems,
      subtotal: this.subtotal,
      discount: this.discountAmount,
      tax: this.taxAmount,
      total: this.grandTotal,
      paymentMethod: this.paymentMethod,
      amountReceived: received,
      change: this.changeAmount,
    });

    this.showPaymentModal = false;

    alert("Payment successful! Sale completed.");
  }
}
