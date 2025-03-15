import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Camera, Bell, MessageSquare, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LOGO from '../assets/logo.png';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Camera, label: 'Video Stream', path: '/stream' },
    { icon: Bell, label: 'Alerts', path: '/alerts' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-72 min-h-screen p-4 glass dark:bg-opacity-30 bg-opacity-30 backdrop-blur-lg">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-15"></div>
            <img
  src={LOGO}
  alt="Logo"
  className="w-10 h-10 sm:w-13 sm:h-12 md:w-13 md:h-14 lg:w-16 lg:h-16 xl:w-14 xl:h-15 rounded-lg object-contain"
/>

          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BlindSpot 
          </h1>
        </div>
        <ThemeToggle />
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition-all ${
                isActive
                  ? 'glass bg-blue-500 bg-opacity-20 text-blue-500 dark:text-blue-400'
                  : 'hover:glass text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;