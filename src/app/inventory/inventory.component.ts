import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";

interface MedicineStock {
  id: number;
  name: string;
  brand: string;
  category: string;
  batch: string;
  expiry: string;
  stock: number;
  mrp: number;
  status: "In Stock" | "Low Stock" | "Out of Stock" | "Expired";
}

interface TopSellingMedicine {
  name: string;
  unitsSold: number;
  salesValue: number;
}

interface LowStockMedicine {
  name: string;
  stock: number;
  reorderLevel: number;
}

@Component({
  selector: "app-inventory",
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopbarComponent],
  templateUrl: "./inventory.component.html",
  styleUrl: "./inventory.component.css",
})
export class InventoryComponent {
  searchText = "";

  selectedCategory = "All Categories";

  selectedStatus = "All Status";

  currentPage = 1;

  pageSize = 10;

  showActionMenu: number | null = null;

  categories = [
    "All Categories",
    "Analgesic",
    "Antibiotic",
    "Antihistamine",
    "Gastric",
    "Antidiabetic",
    "Respiratory",
    "Vitamins",
    "Electrolyte",
  ];

  statuses = ["All Status", "In Stock", "Low Stock", "Out of Stock", "Expired"];

  medicines: MedicineStock[] = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      brand: "Crocin",
      category: "Analgesic",
      batch: "PCT50023",
      expiry: "05/2026",
      stock: 148,
      mrp: 12.5,
      status: "In Stock",
    },

    {
      id: 2,
      name: "Azithromycin 500mg",
      brand: "Azee 500",
      category: "Antibiotic",
      batch: "AZT5024",
      expiry: "08/2026",
      stock: 89,
      mrp: 65,
      status: "Low Stock",
    },

    {
      id: 3,
      name: "Cetirizine 10mg",
      brand: "Cetzine",
      category: "Antihistamine",
      batch: "CTZ1023",
      expiry: "11/2025",
      stock: 76,
      mrp: 18,
      status: "Low Stock",
    },

    {
      id: 4,
      name: "Amoxicillin 500mg",
      brand: "Mox 500",
      category: "Antibiotic",
      batch: "AMX5025",
      expiry: "09/2026",
      stock: 45,
      mrp: 22,
      status: "Low Stock",
    },

    {
      id: 5,
      name: "Ibuprofen 400mg",
      brand: "Brufen",
      category: "Analgesic",
      batch: "IBU4023",
      expiry: "07/2026",
      stock: 210,
      mrp: 15,
      status: "In Stock",
    },

    {
      id: 6,
      name: "Omeprazole 20mg",
      brand: "Omez",
      category: "Gastric",
      batch: "OME2024",
      expiry: "12/2026",
      stock: 180,
      mrp: 28,
      status: "In Stock",
    },

    {
      id: 7,
      name: "Metformin 500mg",
      brand: "Glycomet",
      category: "Antidiabetic",
      batch: "MET5008",
      expiry: "10/2026",
      stock: 160,
      mrp: 22.5,
      status: "In Stock",
    },

    {
      id: 8,
      name: "Salbutamol 100mcg",
      brand: "Asmol",
      category: "Respiratory",
      batch: "SAL1005",
      expiry: "06/2026",
      stock: 35,
      mrp: 55,
      status: "Low Stock",
    },

    {
      id: 9,
      name: "Vitamin C 500mg",
      brand: "Limcee",
      category: "Vitamins",
      batch: "VITC5022",
      expiry: "02/2026",
      stock: 25,
      mrp: 10,
      status: "Low Stock",
    },

    {
      id: 10,
      name: "ORS Sachet",
      brand: "Electral",
      category: "Electrolyte",
      batch: "ORS2025",
      expiry: "03/2027",
      stock: 320,
      mrp: 6,
      status: "In Stock",
    },

    {
      id: 11,
      name: "Pantoprazole 40mg",
      brand: "Pantocid",
      category: "Gastric",
      batch: "PAN4026",
      expiry: "04/2027",
      stock: 140,
      mrp: 22,
      status: "In Stock",
    },

    {
      id: 12,
      name: "Losartan 50mg",
      brand: "Losar",
      category: "Antihypertensive",
      batch: "LOS5026",
      expiry: "09/2027",
      stock: 20,
      mrp: 30,
      status: "Low Stock",
    },
  ];

  topSelling: TopSellingMedicine[] = [
    {
      name: "Paracetamol 500mg",
      unitsSold: 1250,
      salesValue: 15625,
    },

    {
      name: "Azithromycin 500mg",
      unitsSold: 860,
      salesValue: 55900,
    },

    {
      name: "Cetirizine 10mg",
      unitsSold: 720,
      salesValue: 12960,
    },

    {
      name: "Ibuprofen 400mg",
      unitsSold: 650,
      salesValue: 9750,
    },

    {
      name: "Omeprazole 20mg",
      unitsSold: 540,
      salesValue: 15120,
    },
  ];

  lowStockMedicines: LowStockMedicine[] = [
    {
      name: "Azithromycin 500mg",
      stock: 89,
      reorderLevel: 150,
    },

    {
      name: "Cetirizine 10mg",
      stock: 76,
      reorderLevel: 120,
    },

    {
      name: "Amoxicillin 500mg",
      stock: 45,
      reorderLevel: 100,
    },

    {
      name: "Salbutamol 100mcg",
      stock: 35,
      reorderLevel: 80,
    },

    {
      name: "Vitamin C 500mg",
      stock: 25,
      reorderLevel: 60,
    },
  ];

  get filteredMedicines(): MedicineStock[] {
    return this.medicines.filter((medicine) => {
      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        !search ||
        medicine.name.toLowerCase().includes(search) ||
        medicine.brand.toLowerCase().includes(search) ||
        medicine.category.toLowerCase().includes(search) ||
        medicine.batch.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === "All Categories" ||
        medicine.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === "All Status" ||
        medicine.status === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMedicines.length / this.pageSize);
  }

  get paginatedMedicines(): MedicineStock[] {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredMedicines.slice(start, start + this.pageSize);
  }

  get pageStart(): number {
    if (this.filteredMedicines.length === 0) {
      return 0;
    }

    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get pageEnd(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredMedicines.length,
    );
  }

  get totalStockUnits(): number {
    return this.medicines.reduce(
      (total, medicine) => total + medicine.stock,
      0,
    );
  }

  get stockValue(): number {
    return this.medicines.reduce(
      (total, medicine) => total + medicine.stock * medicine.mrp,
      0,
    );
  }

  get lowStockCount(): number {
    return this.medicines.filter((medicine) => medicine.status === "Low Stock")
      .length;
  }

  get outOfStockCount(): number {
    return this.medicines.filter(
      (medicine) => medicine.status === "Out of Stock",
    ).length;
  }

  get expiredCount(): number {
    return this.medicines.filter((medicine) => medicine.status === "Expired")
      .length;
  }

  searchChanged(): void {
    this.currentPage = 1;
  }

  filterChanged(): void {
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  toggleActionMenu(id: number): void {
    this.showActionMenu = this.showActionMenu === id ? null : id;
  }

  viewMedicine(medicine: MedicineStock): void {
    this.showActionMenu = null;

    console.log("View medicine:", medicine);
  }

  editMedicine(medicine: MedicineStock): void {
    this.showActionMenu = null;

    console.log("Edit medicine:", medicine);
  }

  adjustStock(medicine: MedicineStock): void {
    this.showActionMenu = null;

    console.log("Adjust stock:", medicine);
  }

  exportInventory(): void {
    console.log("Export inventory", this.filteredMedicines);
  }

  viewLowStock(): void {
    this.selectedStatus = "Low Stock";

    this.currentPage = 1;
  }

  viewExpiryAlerts(): void {
    console.log("Open expiry alerts");
  }
}
