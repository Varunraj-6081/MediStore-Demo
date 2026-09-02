import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface PurchaseItem {
  id: number;
  medicine: string;
  brand: string;
  batch: string;
  expiry: string;
  qty: number;
  purchasePrice: number;
  discount: number;
  gst: number;
}

interface PurchaseBill {
  billNo: string;
  supplier: string;
  amount: number;
  date: string;
  status: string;
}

@Component({
  selector: "app-purchase",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./purchase.component.html",
  styleUrl: "./purchase.component.css",
})
export class PurchaseComponent {
  selectedSupplier = "";

  invoiceNumber = "";

  invoiceDate = new Date().toISOString().split("T")[0];

  paymentTerms = "Cash on Delivery";

  searchMedicine = "";

  note = "";

  purchaseItems: PurchaseItem[] = [
    {
      id: 1,
      medicine: "Paracetamol 500mg",
      brand: "Crocin",
      batch: "PCT50023",
      expiry: "05/2026",
      qty: 10,
      purchasePrice: 7.2,
      discount: 0,
      gst: 12,
    },
    {
      id: 2,
      medicine: "Azithromycin 500mg",
      brand: "Azee 500",
      batch: "AZT5024",
      expiry: "08/2026",
      qty: 5,
      purchasePrice: 35.0,
      discount: 0,
      gst: 12,
    },
    {
      id: 3,
      medicine: "Cetirizine 10mg",
      brand: "Cetzine",
      batch: "CTZ1023",
      expiry: "11/2025",
      qty: 10,
      purchasePrice: 9.5,
      discount: 0,
      gst: 12,
    },
    {
      id: 4,
      medicine: "Amoxicillin 500mg",
      brand: "Mox 500",
      batch: "AMX5025",
      expiry: "09/2026",
      qty: 5,
      purchasePrice: 18.0,
      discount: 0,
      gst: 12,
    },
  ];

  purchaseBills: PurchaseBill[] = [
    {
      billNo: "PUR-2026-0036",
      supplier: "MedPlus Distributors",
      amount: 8650,
      date: "Today, 11:20 AM",
      status: "Received",
    },
    {
      billNo: "PUR-2026-0035",
      supplier: "Apollo Pharmacy",
      amount: 12450,
      date: "Today, 09:45 AM",
      status: "Received",
    },
    {
      billNo: "PUR-2026-0034",
      supplier: "Surgi Healthcare",
      amount: 5320,
      date: "Yesterday, 07:30 PM",
      status: "Received",
    },
    {
      billNo: "PUR-2026-0033",
      supplier: "MedPlus Distributors",
      amount: 9850,
      date: "Yesterday, 05:10 PM",
      status: "Pending",
    },
    {
      billNo: "PUR-2026-0032",
      supplier: "Apollo Pharmacy",
      amount: 7200,
      date: "26 May 2026",
      status: "Received",
    },
  ];

  // ==========================
  // CALCULATIONS
  // ==========================

  get subtotal(): number {
    return this.purchaseItems.reduce((total, item) => {
      const itemTotal = item.qty * item.purchasePrice;

      const discount = itemTotal * (item.discount / 100);

      return total + itemTotal - discount;
    }, 0);
  }

  get discountAmount(): number {
    return this.purchaseItems.reduce((total, item) => {
      const itemTotal = item.qty * item.purchasePrice;

      return total + (itemTotal * item.discount) / 100;
    }, 0);
  }

  get gstAmount(): number {
    return this.purchaseItems.reduce((total, item) => {
      const itemTotal = item.qty * item.purchasePrice;

      const discount = itemTotal * (item.discount / 100);

      const taxableAmount = itemTotal - discount;

      return total + (taxableAmount * item.gst) / 100;
    }, 0);
  }

  get grandTotal(): number {
    return this.subtotal + this.gstAmount;
  }

  // ==========================
  // QUANTITY
  // ==========================

  increaseQty(item: PurchaseItem): void {
    item.qty++;
  }

  decreaseQty(item: PurchaseItem): void {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  removeItem(item: PurchaseItem): void {
    this.purchaseItems = this.purchaseItems.filter((x) => x.id !== item.id);
  }

  // ==========================
  // ACTIONS
  // ==========================

  addSupplier(): void {
    console.log("Open Add Supplier");
  }

  addMedicine(): void {
    console.log("Open Add Medicine");
  }

  scanBarcode(): void {
    console.log("Scan barcode");
  }

  clearCart(): void {
    this.purchaseItems = [];
  }

  savePurchase(): void {
    if (!this.selectedSupplier) {
      alert("Please select a supplier.");

      return;
    }

    if (!this.invoiceNumber.trim()) {
      alert("Please enter invoice/bill number.");

      return;
    }

    if (this.purchaseItems.length === 0) {
      alert("Please add at least one medicine.");

      return;
    }

    console.log("Purchase saved:", {
      supplier: this.selectedSupplier,

      invoiceNumber: this.invoiceNumber,

      invoiceDate: this.invoiceDate,

      paymentTerms: this.paymentTerms,

      items: this.purchaseItems,

      subtotal: this.subtotal,

      discount: this.discountAmount,

      gst: this.gstAmount,

      grandTotal: this.grandTotal,

      note: this.note,
    });

    alert(`Purchase ${this.invoiceNumber} saved successfully!`);
  }

  viewPurchase(bill: PurchaseBill): void {
    console.log("View purchase:", bill.billNo);
  }
}
