import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'forest' | 'golden' | 'terracotta';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = 'bueadelights_theme';

const themes: Record<Theme, { name: string; primary: string; secondary: string; accent: string }> = {
  light: {
    name: 'Light',
    primary: '#1B5E20',
    secondary: '#FFF8E1',
    accent: '#FF8F00'
  },
  dark: {
    name: 'Dark',
    primary: '#2E7D32',
    secondary: '#1A1A1A',
    accent: '#FFB300'
  },
  forest: {
    name: 'Forest',
    primary: '#1B5E20',
    secondary: '#E8F5E8',
    accent: '#4CAF50'
  },
  golden: {
    name: 'Golden',
    primary: '#E65100',
    secondary: '#FFF3E0',
    accent: '#FF8F00'
  },
  terracotta: {
    name: 'Terracotta',
    primary: '#BF360C',
    secondary: '#FBE9E7',
    accent: '#FF5722'
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    } else {
      // Auto-detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const themeConfig = themes[theme];
    
    // Apply CSS custom properties
    root.style.setProperty('--theme-primary', themeConfig.primary);
    root.style.setProperty('--theme-secondary', themeConfig.secondary);
    root.style.setProperty('--theme-accent', themeConfig.accent);
    
    // Apply theme class
    root.className = root.className.replace(/theme-\w+/g, '');
    root.classList.add(`theme-${theme}`);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeConfig.primary);
    }

    // Save to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(current => current === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    isDark
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { themes };
export default ThemeContext;