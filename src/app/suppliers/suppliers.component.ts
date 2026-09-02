import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface Supplier {
  id: number;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  totalPurchase: number;
  outstanding: number;
  status: "Active" | "Inactive";
}

interface PurchaseBill {
  billNo: string;
  supplier: string;
  amount: number;
  date: string;
  status: "Received" | "Pending";
}

@Component({
  selector: "app-suppliers",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./suppliers.component.html",
  styleUrl: "./suppliers.component.css",
})
export class SuppliersComponent {
  searchText = "";
  selectedStatus = "All Status";

  currentPage = 1;
  pageSize = 10;

  openMenu: number | null = null;

  statuses = ["All Status", "Active", "Inactive"];

  suppliers: Supplier[] = [
    {
      id: 1,
      name: "MedPlus Distributors",
      contactPerson: "Rajesh Kumar",
      phone: "98765 43210",
      email: "rajesh@medplus.com",
      city: "Chennai",
      totalPurchase: 125450,
      outstanding: 5200,
      status: "Active",
    },

    {
      id: 2,
      name: "Apollo Pharmacy",
      contactPerson: "Vikram Singh",
      phone: "91234 56789",
      email: "vikram@apollo.com",
      city: "Bangalore",
      totalPurchase: 75230,
      outstanding: 3750,
      status: "Active",
    },

    {
      id: 3,
      name: "Surgi Healthcare",
      contactPerson: "Anil Mehta",
      phone: "99887 66554",
      email: "anil@surgi.com",
      city: "Hyderabad",
      totalPurchase: 28640,
      outstanding: 1800,
      status: "Active",
    },

    {
      id: 4,
      name: "HealthCare Distributors",
      contactPerson: "Suresh Babu",
      phone: "93456 77889",
      email: "suresh@healthcare.com",
      city: "Coimbatore",
      totalPurchase: 15000,
      outstanding: 2500,
      status: "Active",
    },

    {
      id: 5,
      name: "Lifeline Pharma",
      contactPerson: "Pooja Sharma",
      phone: "90012 34567",
      email: "pooja@lifeline.com",
      city: "Mumbai",
      totalPurchase: 12450,
      outstanding: 1250,
      status: "Active",
    },

    {
      id: 6,
      name: "Wellness Pharma",
      contactPerson: "Arvind Patel",
      phone: "87654 32109",
      email: "arvind@wellness.com",
      city: "Ahmedabad",
      totalPurchase: 8950,
      outstanding: 0,
      status: "Active",
    },

    {
      id: 7,
      name: "Global Meds",
      contactPerson: "Imran Khan",
      phone: "88991 22334",
      email: "imran@globalmeds.com",
      city: "Delhi",
      totalPurchase: 6780,
      outstanding: 3600,
      status: "Inactive",
    },

    {
      id: 8,
      name: "Bright Medicals",
      contactPerson: "Deepak Verma",
      phone: "99123 55667",
      email: "deepak@bright.com",
      city: "Jaipur",
      totalPurchase: 5600,
      outstanding: 0,
      status: "Active",
    },

    {
      id: 9,
      name: "CarePlus Distributors",
      contactPerson: "Manoj Gupta",
      phone: "91555 66778",
      email: "manoj@careplus.com",
      city: "Kolkata",
      totalPurchase: 4320,
      outstanding: 1400,
      status: "Inactive",
    },

    {
      id: 10,
      name: "Prime Pharma",
      contactPerson: "Neha Agarwal",
      phone: "90222 33445",
      email: "neha@primepharma.com",
      city: "Pune",
      totalPurchase: 3900,
      outstanding: 600,
      status: "Active",
    },

    {
      id: 11,
      name: "MediCare Suppliers",
      contactPerson: "Karthik Raj",
      phone: "94444 12345",
      email: "karthik@medicare.com",
      city: "Chennai",
      totalPurchase: 3400,
      outstanding: 450,
      status: "Active",
    },
  ];

  recentBills: PurchaseBill[] = [
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
      supplier: "HealthCare Distributors",
      amount: 9850,
      date: "Yesterday, 05:10 PM",
      status: "Pending",
    },

    {
      billNo: "PUR-2026-0032",
      supplier: "Lifeline Pharma",
      amount: 7200,
      date: "26 May 2026",
      status: "Received",
    },
  ];

  topSuppliers = [
    {
      name: "MedPlus Distributors",
      purchase: 125450,
      bills: 18,
    },
    {
      name: "Apollo Pharmacy",
      purchase: 75230,
      bills: 10,
    },
    {
      name: "Surgi Healthcare",
      purchase: 28640,
      bills: 6,
    },
    {
      name: "HealthCare Distributors",
      purchase: 15000,
      bills: 2,
    },
    {
      name: "Lifeline Pharma",
      purchase: 12450,
      bills: 3,
    },
  ];

  paymentDue = [
    {
      supplier: "MedPlus Distributors",
      amount: 5200,
      dueSince: "12 May 2026",
    },
    {
      supplier: "Global Meds",
      amount: 3600,
      dueSince: "18 May 2026",
    },
    {
      supplier: "HealthCare Distributors",
      amount: 2500,
      dueSince: "20 May 2026",
    },
    {
      supplier: "Surgi Healthcare",
      amount: 1800,
      dueSince: "25 May 2026",
    },
    {
      supplier: "CarePlus Distributors",
      amount: 1400,
      dueSince: "26 May 2026",
    },
  ];

  get filteredSuppliers(): Supplier[] {
    const search = this.searchText.toLowerCase().trim();

    return this.suppliers.filter((supplier) => {
      const matchesSearch =
        !search ||
        supplier.name.toLowerCase().includes(search) ||
        supplier.contactPerson.toLowerCase().includes(search) ||
        supplier.email.toLowerCase().includes(search) ||
        supplier.phone.includes(search) ||
        supplier.city.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === "All Status" ||
        supplier.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get paginatedSuppliers(): Supplier[] {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredSuppliers.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredSuppliers.length / this.pageSize);
  }

  get totalOutstanding(): number {
    return this.suppliers.reduce(
      (sum, supplier) => sum + supplier.outstanding,
      0,
    );
  }

  get pageStart(): number {
    if (!this.filteredSuppliers.length) {
      return 0;
    }

    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get pageEnd(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredSuppliers.length,
    );
  }

  onSearch(): void {
    this.currentPage = 1;
  }

  onFilter(): void {
    this.currentPage = 1;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  toggleMenu(id: number): void {
    this.openMenu = this.openMenu === id ? null : id;
  }

  viewSupplier(supplier: Supplier): void {
    this.openMenu = null;

    console.log("View Supplier", supplier);
  }

  editSupplier(supplier: Supplier): void {
    this.openMenu = null;

    console.log("Edit Supplier", supplier);
  }

  viewPurchases(supplier: Supplier): void {
    this.openMenu = null;

    console.log("View Purchases", supplier);
  }

  addSupplier(): void {
    console.log("Add Supplier clicked");
  }

  exportSuppliers(): void {
    console.log("Export Suppliers", this.filteredSuppliers);
  }

  viewPayments(): void {
    console.log("View Pending Payments");
  }
}
