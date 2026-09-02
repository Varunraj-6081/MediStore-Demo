import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../shared/topbar/topbar.component";
import { AddMedicineComponent } from "./add-medicine/add-medicine.component";

interface Medicine {
  name: string;
  brand: string;
  category: string;
  stock: number;
  price: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

@Component({
  selector: "app-medicine",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    TopbarComponent,
    AddMedicineComponent,
  ],
  templateUrl: "./medicine.component.html",
  styleUrl: "./medicine.component.css",
})
export class MedicineComponent {
  activeTab = "All";

  searchText = "";

  showAddMedicine = false;

  medicines: Medicine[] = [
    {
      name: "Paracetamol 500mg",
      brand: "Crocin",
      category: "Analgesic",
      stock: 150,
      price: 12.5,
      status: "In Stock",
    },
    {
      name: "Azithromycin 500mg",
      brand: "Azee",
      category: "Antibiotic",
      stock: 40,
      price: 65.0,
      status: "In Stock",
    },
    {
      name: "Cetirizine 10mg",
      brand: "Zyrtec",
      category: "Antihistamine",
      stock: 9,
      price: 18.0,
      status: "Low Stock",
    },
    {
      name: "Pantoprazole 40mg",
      brand: "Pan 40",
      category: "Gastro",
      stock: 0,
      price: 22.0,
      status: "Out of Stock",
    },
    {
      name: "Amoxicillin 500mg",
      brand: "Mox",
      category: "Antibiotic",
      stock: 65,
      price: 25.0,
      status: "In Stock",
    },
    {
      name: "Vitamin D3 60K",
      brand: "Uprise D3",
      category: "Supplement",
      stock: 22,
      price: 85.0,
      status: "In Stock",
    },
    {
      name: "Losartan 50mg",
      brand: "Losar",
      category: "Cardiac",
      stock: 6,
      price: 30.0,
      status: "Low Stock",
    },
    {
      name: "Metformin 500mg",
      brand: "Glycomet",
      category: "Diabetic",
      stock: 120,
      price: 14.0,
      status: "In Stock",
    },
  ];

  get filteredMedicines(): Medicine[] {
    let result = this.medicines;

    // Tab filtering
    if (this.activeTab !== "All") {
      result = result.filter((medicine) => {
        if (this.activeTab === "OTC") {
          return ["Analgesic", "Supplement", "Antihistamine"].includes(
            medicine.category,
          );
        }

        if (this.activeTab === "Prescription") {
          return ["Antibiotic", "Cardiac", "Diabetic", "Gastro"].includes(
            medicine.category,
          );
        }

        if (this.activeTab === "Generic") {
          return medicine.brand.toLowerCase().includes("generic");
        }

        if (this.activeTab === "Branded") {
          return !medicine.brand.toLowerCase().includes("generic");
        }

        return true;
      });
    }

    // Search filtering
    if (this.searchText.trim()) {
      const search = this.searchText.toLowerCase();

      result = result.filter(
        (medicine) =>
          medicine.name.toLowerCase().includes(search) ||
          medicine.brand.toLowerCase().includes(search) ||
          medicine.category.toLowerCase().includes(search),
      );
    }

    return result;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  addMedicine(): void {
    this.showAddMedicine = true;
  }

  closeAddMedicine(): void {
    this.showAddMedicine = false;
  }

  saveNewMedicine(medicine: any): void {
    this.medicines.unshift({
      name: medicine.medicineName,
      brand: medicine.brandName,
      category: medicine.category,
      stock: medicine.stockQuantity ?? 0,
      price: medicine.sellingPrice ?? 0,
      status: "In Stock",
    });
    this.showAddMedicine = false;
  }

  viewMedicine(medicine: Medicine): void {
    console.log("View medicine:", medicine);
  }

  editMedicine(medicine: Medicine): void {
    console.log("Edit medicine:", medicine);
  }

  deleteMedicine(medicine: Medicine): void {
    console.log("Delete medicine:", medicine);
  }

  filterMedicines(): void {
    console.log("Filter clicked");
  }
}
