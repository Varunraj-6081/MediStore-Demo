import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  city: string;
  totalPurchase: number;
  outstanding: number;
  type: "Retail" | "Wholesale";
  status: "Active" | "Inactive";
}

@Component({
  selector: "app-customers",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./customer.component.html",
  styleUrl: "./customer.component.css",
})
export class CustomersComponent {
  searchText = "";
  selectedStatus = "All Status";
  selectedType = "All Type";

  currentPage = 1;
  pageSize = 10;

  openMenu: number | null = null;

  statuses = ["All Status", "Active", "Inactive"];
  types = ["All Type", "Retail", "Wholesale"];

  customers: Customer[] = [
    {
      id: 1,
      name: "Ramesh Kumar",
      phone: "98765 43210",
      email: "ramesh@gmail.com",
      city: "Chennai",
      totalPurchase: 12450,
      outstanding: 500,
      type: "Retail",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "91234 56789",
      email: "priya.sharma@gmail.com",
      city: "Bangalore",
      totalPurchase: 8920.5,
      outstanding: 0,
      type: "Retail",
      status: "Active",
    },
    {
      id: 3,
      name: "Walk-in Customer",
      phone: "-",
      email: "-",
      city: "-",
      totalPurchase: 6780,
      outstanding: 0,
      type: "Retail",
      status: "Active",
    },
    {
      id: 4,
      name: "Suresh N",
      phone: "99887 66554",
      email: "suresh.n@gmail.com",
      city: "Hyderabad",
      totalPurchase: 5670.3,
      outstanding: 250,
      type: "Retail",
      status: "Active",
    },
    {
      id: 5,
      name: "Anitha Reddy",
      phone: "93456 77889",
      email: "anitha.reddy@gmail.com",
      city: "Coimbatore",
      totalPurchase: 4320,
      outstanding: 0,
      type: "Retail",
      status: "Active",
    },
    {
      id: 6,
      name: "Karthik Raj",
      phone: "90012 34567",
      email: "karthikraj@gmail.com",
      city: "Mumbai",
      totalPurchase: 3890,
      outstanding: 150,
      type: "Retail",
      status: "Active",
    },
    {
      id: 7,
      name: "Meena Iyer",
      phone: "87654 32109",
      email: "meena.iyer@gmail.com",
      city: "Pune",
      totalPurchase: 3250,
      outstanding: 0,
      type: "Retail",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Vigneshwaran",
      phone: "88991 22334",
      email: "vignesh@gmail.com",
      city: "Chennai",
      totalPurchase: 2980,
      outstanding: 120,
      type: "Retail",
      status: "Active",
    },
    {
      id: 9,
      name: "Deepika Verma",
      phone: "99123 55667",
      email: "deepika.verma@gmail.com",
      city: "Delhi",
      totalPurchase: 2450,
      outstanding: 0,
      type: "Retail",
      status: "Active",
    },
    {
      id: 10,
      name: "Arjun Patel",
      phone: "91555 66778",
      email: "arjun.patel@gmail.com",
      city: "Ahmedabad",
      totalPurchase: 2100,
      outstanding: 80,
      type: "Retail",
      status: "Active",
    },
    {
      id: 11,
      name: "Mohan Traders",
      phone: "94444 12345",
      email: "mohan@traders.com",
      city: "Chennai",
      totalPurchase: 18500,
      outstanding: 3200,
      type: "Wholesale",
      status: "Active",
    },
  ];

  recentSales = [
    {
      invoice: "INV-2026-0021",
      customer: "Ramesh Kumar",
      amount: 108,
      date: "Today, 11:30 AM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0020",
      customer: "Priya Sharma",
      amount: 892.5,
      date: "Today, 10:15 AM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0019",
      customer: "Walk-in Customer",
      amount: 248,
      date: "Today, 09:45 AM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0018",
      customer: "Suresh N",
      amount: 567.3,
      date: "Yesterday, 07:20 PM",
      status: "Paid",
    },
    {
      invoice: "INV-2026-0017",
      customer: "Anitha Reddy",
      amount: 156,
      date: "Yesterday, 06:10 PM",
      status: "Paid",
    },
  ];

  topCustomers = [
    {
      name: "Ramesh Kumar",
      purchase: 12450,
      orders: 18,
    },
    {
      name: "Priya Sharma",
      purchase: 8920.5,
      orders: 12,
    },
    {
      name: "Suresh N",
      purchase: 5670.3,
      orders: 9,
    },
    {
      name: "Anitha Reddy",
      purchase: 4320,
      orders: 7,
    },
    {
      name: "Karthik Raj",
      purchase: 3890,
      orders: 6,
    },
  ];

  paymentDue = [
    {
      customer: "Ramesh Kumar",
      amount: 500,
      dueSince: "12 May 2026",
    },
    {
      customer: "Suresh N",
      amount: 250,
      dueSince: "18 May 2026",
    },
    {
      customer: "Karthik Raj",
      amount: 150,
      dueSince: "20 May 2026",
    },
    {
      customer: "Vigneshwaran",
      amount: 120,
      dueSince: "22 May 2026",
    },
    {
      customer: "Arjun Patel",
      amount: 80,
      dueSince: "25 May 2026",
    },
  ];

  get filteredCustomers(): Customer[] {
    const search = this.searchText.toLowerCase().trim();

    return this.customers.filter((customer) => {
      const matchesSearch =
        !search ||
        customer.name.toLowerCase().includes(search) ||
        customer.phone.toLowerCase().includes(search) ||
        customer.email.toLowerCase().includes(search) ||
        customer.city.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === "All Status" ||
        customer.status === this.selectedStatus;

      const matchesType =
        this.selectedType === "All Type" || customer.type === this.selectedType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }

  get paginatedCustomers(): Customer[] {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredCustomers.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCustomers.length / this.pageSize);
  }

  get pageStart(): number {
    return this.filteredCustomers.length
      ? (this.currentPage - 1) * this.pageSize + 1
      : 0;
  }

  get pageEnd(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredCustomers.length,
    );
  }

  searchChanged(): void {
    this.currentPage = 1;
  }

  filterChanged(): void {
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

  addCustomer(): void {
    console.log("Add Customer");
  }

  viewCustomer(customer: Customer): void {
    this.openMenu = null;
    console.log("View Customer", customer);
  }

  editCustomer(customer: Customer): void {
    this.openMenu = null;
    console.log("Edit Customer", customer);
  }

  viewSales(customer: Customer): void {
    this.openMenu = null;
    console.log("View Sales", customer);
  }

  exportCustomers(): void {
    console.log("Export Customers", this.filteredCustomers);
  }
}
