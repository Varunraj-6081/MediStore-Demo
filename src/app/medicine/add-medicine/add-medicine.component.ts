import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-medicine",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./add-medicine.component.html",
  styleUrl: "./add-medicine.component.css",
})
export class AddMedicineComponent {
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<any>();

  medicine = {
    medicineName: "",
    brandName: "",
    genericName: "",
    category: "",
    medicineType: "",
    composition: "",
    dosage: "",
    strength: "",
    unit: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    purchasePrice: null,
    sellingPrice: null,
    gst: "",
    stockQuantity: null,
    minimumStockLevel: null,
    storageLocation: "",
    notes: "",
  };

  categories = [
    "Analgesic",
    "Antibiotic",
    "Antihistamine",
    "Gastro",
    "Cardiac",
    "Diabetic",
    "Supplement",
    "Other",
  ];

  medicineTypes = ["OTC", "Prescription", "Generic", "Branded"];

  units = [
    "Tablet",
    "Capsule",
    "Bottle",
    "Strip",
    "Tube",
    "Box",
    "Vial",
    "Syrup",
  ];

  gstOptions = ["0%", "5%", "12%", "18%"];

  closeModal(): void {
    this.close.emit();
  }

  saveMedicine(): void {
    if (
      !this.medicine.medicineName ||
      !this.medicine.brandName ||
      !this.medicine.category ||
      !this.medicine.medicineType ||
      !this.medicine.batchNumber ||
      !this.medicine.manufacturingDate ||
      !this.medicine.expiryDate
    ) {
      alert("Please fill all required fields.");
      return;
    }

    this.saved.emit(this.medicine);
  }
}
