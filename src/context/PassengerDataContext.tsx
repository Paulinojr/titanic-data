import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { passengerData } from '../data/titanic-passengers';
import {Passenger, PassengerDataContextType} from '../data/Passenger.d';


const PassengerDataContext = createContext<PassengerDataContextType | undefined>(undefined);

export const PassengerDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPassengers = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPassengers(passengerData);
      setLoading(false);
    };

    fetchPassengers();
  }, []);

  return (
    <PassengerDataContext.Provider value={{ passengers, loading }}>
      {children}
    </PassengerDataContext.Provider>
  );
};


//custom hook 
export const usePassengerData = (): PassengerDataContextType => {
  const context = useContext(PassengerDataContext);
  if (!context) {
    throw new Error('usePassengerData must be used within a PassengerDataProvider');
  }
  return context;
};