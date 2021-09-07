import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <a
      className='cursor-pointer'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <i className='p-2 text-yellow-400 fas fa-sun fa-lg'></i>
      ) : (
        <i className='p-2 text-gray-800 far fa-moon fa-lg'></i>
      )}
    </a>
  );
}
