import { Units } from "../Enums/Units";


export default interface WeatherDto {
  temperature: number;
  unit: Units;
  description: string;
  city: string;
  icon: string;
}
