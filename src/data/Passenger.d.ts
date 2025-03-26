export type Passenger = {
  passengerId: number;
  survived: number;
  pclass: number;
  name: string;
  sex: string;
  age: number | string;
  sibSP: number;
  parch: number;
  ticket: string | number;
  fare: number;
  cabin: string;
  embarked: string;
};

interface PassengerDataContextType {
  passengers: Passenger[];
  loading: boolean;
}