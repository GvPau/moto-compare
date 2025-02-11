export function validateMotorcycleData(data: any) {
  if (!data.model || !data.brand) {
    throw new Error("Invalid motorcycle data");
  }
  // Add other validation rules
}
