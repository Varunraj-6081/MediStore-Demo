import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface ExpiryItem {
  id: number;
  medicine: string;
  brand: string;
  category: string;
  batch: string;
  expiryDate: string;
  daysLeft: number;
  stock: number;
  value: number;
  status: string;
}

@Component({
  selector: "app-expiry-alerts",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./expiryalerts.component.html",
  styleUrl: "./expiryalerts.component.css",
})
export class ExpiryAlertsComponent {
  searchText = "";
  selectedCategory = "All Categories";
  selectedStatus = "All Status";
  selectedPeriod = "All Period";

  currentPage = 1;
  pageSize = 10;

  categories = [
    "All Categories",
    "Antibiotic",
    "Gastric",
    "Vitamins",
    "Analgesic",
    "Antihistamine",
    "Antidiabetic",
  ];

  statuses = [
    "All Status",
    "Expired",
    "0 - 30 Days",
    "31 - 90 Days",
    "91+ Days",
  ];

  periods = [
    "All Period",
    "Expired",
    "0 - 30 Days",
    "31 - 90 Days",
    "91+ Days",
  ];

  expiryItems: ExpiryItem[] = [
    {
      id: 1,
      medicine: "Cetirizine 10mg",
      brand: "Cetzine",
      category: "Antihistamine",
      batch: "CTZ1023",
      expiryDate: "11/05/2026",
      daysLeft: -10,
      stock: 12,
      value: 216,
      status: "Expired",
    },

    {
      id: 2,
      medicine: "Amoxicillin 500mg",
      brand: "Mox 500",
      category: "Antibiotic",
      batch: "AMX1022",
      expiryDate: "08/05/2026",
      daysLeft: -7,
      stock: 8,
      value: 176,
      status: "Expired",
    },

    {
      id: 3,
      medicine: "Azithromycin 500mg",
      brand: "Azee 500",
      category: "Antibiotic",
      batch: "AZT5023",
      expiryDate: "15/05/2026",
      daysLeft: -1,
      stock: 15,
      value: 975,
      status: "Expired",
    },

    {
      id: 4,
      medicine: "Pantoprazole 40mg",
      brand: "Pantocid",
      category: "Gastric",
      batch: "PAN4023",
      expiryDate: "22/09/2026",
      daysLeft: 4,
      stock: 25,
      value: 550,
      status: "0 - 30 Days",
    },

    {
      id: 5,
      medicine: "Ibuprofen 400mg",
      brand: "Brufen",
      category: "Analgesic",
      batch: "IBU4023",
      expiryDate: "25/09/2026",
      daysLeft: 7,
      stock: 30,
      value: 450,
      status: "0 - 30 Days",
    },

    {
      id: 6,
      medicine: "Vitamin C 500mg",
      brand: "Limcee",
      category: "Vitamins",
      batch: "VITC5022",
      expiryDate: "06/10/2026",
      daysLeft: 18,
      stock: 40,
      value: 400,
      status: "0 - 30 Days",
    },

    {
      id: 7,
      medicine: "Omeprazole 20mg",
      brand: "Omez",
      category: "Gastric",
      batch: "OME2024",
      expiryDate: "10/10/2026",
      daysLeft: 23,
      stock: 60,
      value: 1680,
      status: "0 - 30 Days",
    },

    {
      id: 8,
      medicine: "Salbutamol 100mcg",
      brand: "Asmol",
      category: "Respiratory",
      batch: "SAL1005",
      expiryDate: "12/11/2026",
      daysLeft: 55,
      stock: 35,
      value: 1925,
      status: "31 - 90 Days",
    },

    {
      id: 9,
      medicine: "Metformin 500mg",
      brand: "Glycomet",
      category: "Antidiabetic",
      batch: "MET5008",
      expiryDate: "01/12/2026",
      daysLeft: 75,
      stock: 80,
      value: 1800,
      status: "31 - 90 Days",
    },

    {
      id: 10,
      medicine: "Losartan 50mg",
      brand: "Losar",
      category: "Antihypertensive",
      batch: "LOS5023",
      expiryDate: "05/01/2027",
      daysLeft: 110,
      stock: 50,
      value: 1500,
      status: "91+ Days",
    },

    {
      id: 11,
      medicine: "Atorvastatin 20mg",
      brand: "Atorva",
      category: "Cardiac",
      batch: "ATO2025",
      expiryDate: "15/01/2027",
      daysLeft: 120,
      stock: 42,
      value: 2100,
      status: "91+ Days",
    },
  ];

  get filteredItems(): ExpiryItem[] {
    const search = this.searchText.toLowerCase().trim();

    return this.expiryItems.filter((item) => {
      const matchesSearch =
        !search ||
        item.medicine.toLowerCase().includes(search) ||
        item.brand.toLowerCase().includes(search) ||
        item.batch.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === "All Categories" ||
        item.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === "All Status" ||
        item.status === this.selectedStatus;

      const matchesPeriod =
        this.selectedPeriod === "All Period" ||
        item.status === this.selectedPeriod;

      return matchesSearch && matchesCategory && matchesStatus && matchesPeriod;
    });
  }

  get paginatedItems(): ExpiryItem[] {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredItems.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.pageSize);
  }

  get pageStart(): number {
    return this.filteredItems.length
      ? (this.currentPage - 1) * this.pageSize + 1
      : 0;
  }

  get pageEnd(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredItems.length,
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

  getDaysText(days: number): string {
    if (days < 0) {
      return `${days} days`;
    }

    return `${days} days`;
  }

  getDaysClass(days: number): string {
    if (days < 0) {
      return "expired-days";
    }

    if (days <= 30) {
      return "soon-days";
    }

    if (days <= 90) {
      return "medium-days";
    }

    return "safe-days";
  }

  generateReport(): void {
    console.log("Generate Expiry Report");
  }

  exportExcel(): void {
    console.log("Export Expiry Data");
  }

  viewExpired(): void {
    this.selectedStatus = "Expired";
    this.currentPage = 1;
  }

  viewSoon(): void {
    this.selectedStatus = "0 - 30 Days";
    this.currentPage = 1;
  }

  viewSuggestions(): void {
    console.log("Discount suggestions");
  }

  viewReturnItems(): void {
    console.log("Supplier return items");
  }
}
