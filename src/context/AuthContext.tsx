import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyAge: (isOver20: boolean) => void;
  isAgeVerified: boolean;
  loading: boolean;
}

interface User {
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('lotto_genius_ai_user');
    const ageVerified = localStorage.getItem('lotto_genius_ai_age_verified');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    if (ageVerified === 'true') {
      setIsAgeVerified(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    // In a real app, this would make an API call to validate credentials
    // For demo purposes, we'll simulate a successful login after a delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newUser = { email };
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('lotto_genius_ai_user', JSON.stringify(newUser));
        setLoading(false);
        resolve();
      }, 2000); // 2-second delay as specified
    });
  };

  const verifyAge = (isOver20: boolean) => {
    setIsAgeVerified(isOver20);
    localStorage.setItem('lotto_genius_ai_age_verified', String(isOver20));
    
    if (!isOver20) {
      // If under 20, log them out
      logout();
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('lotto_genius_ai_user');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      login, 
      logout, 
      verifyAge, 
      isAgeVerified, 
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}