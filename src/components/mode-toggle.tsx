import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const [theme, setTheme] = useState('light');
  const [doc, setDoc] = useState<Element | null>(null);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    setDoc(document.firstElementChild);
    if (localStorageTheme) {
      doc?.setAttribute('data-theme', localStorageTheme);
      setTheme(localStorageTheme);
    }
  }, [theme]);

  function handleThemeChange() {
    if (theme === 'light') {
      setTheme('dark');
      doc?.setAttribute('data-theme', 'dark');
      return localStorage.setItem('theme', 'dark');
    }

    setTheme('light');
    doc?.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  return (
    <div className="flex w-full items-center justify-between space-x-4 rounded-md border p-4">
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      <div className="hidden flex-1 md:flex">
        <p className="text-sm font-medium leading-none">
          Tema {theme === 'light' ? 'Claro' : 'Escuro'}
        </p>
      </div>
      <Switch onCheckedChange={handleThemeChange} aria-label="toggle theme" />
    </div>
  );
}
