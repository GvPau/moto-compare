export enum MotorcycleType {
  SPORT = "SPORT",
  NAKED = "NAKED",
  ADVENTURE = "ADVENTURE",
  CRUISER = "CRUISER",
  TOURING = "TOURING",
  SCOOTER = "SCOOTER",
  OFF_ROAD = "OFF_ROAD",
}

export interface Motorcycle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  horsePower: number;
  engineSize: number;
  weight: number;
  type: MotorcycleType;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MotorcycleDisplay extends Omit<Motorcycle, "createdAt" | "updatedAt"> {
  formattedPrice?: string;
  isNew?: boolean;
}
