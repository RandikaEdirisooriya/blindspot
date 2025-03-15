import React, { useState } from 'react';
import { Save, Bell, Shield, Camera, Brain, Eye, Clock, Video, Moon, Users, AlertTriangle, Wifi } from 'lucide-react';

interface Setting {
  id: string;
  name: string;
  description: string;
  value: boolean;
  icon: React.ElementType;
  category: 'ai' | 'camera' | 'notifications' | 'system';
}

const Settings = () => {
  const [settings, setSettings] = useState<Setting[]>([
    {
      id: '1',
      name: 'AI-Enhanced Detection',
      description: 'Use advanced AI algorithms for more accurate threat detection',
      value: true,
      icon: Brain,
      category: 'ai',
    },
    {
      id: '2',
      name: 'Behavioral Analysis',
      description: 'AI-powered analysis of suspicious behavior patterns',
      value: true,
      icon: Users,
      category: 'ai',
    },
    {
      id: '3',
      name: 'Motion Detection',
      description: 'Trigger alerts on detected movement in monitored areas',
      value: true,
      icon: Eye,
      category: 'camera',
    },
    {
      id: '4',
      name: 'Night Vision Mode',
      description: 'Automatically enhance low-light video feeds',
      value: true,
      icon: Moon,
      category: 'camera',
    },
    {
      id: '5',
      name: 'High-Quality Recording',
      description: 'Record footage in maximum quality (uses more storage)',
      value: false,
      icon: Video,
      category: 'camera',
    },
    {
      id: '6',
      name: 'Push Notifications',
      description: 'Receive instant notifications for security alerts',
      value: true,
      icon: Bell,
      category: 'notifications',
    },
    {
      id: '7',
      name: 'Critical Alerts',
      description: 'Get notifications for high-priority security threats',
      value: true,
      icon: AlertTriangle,
      category: 'notifications',
    },
    {
      id: '8',
      name: 'Intrusion Detection',
      description: 'Alert when unauthorized access is detected',
      value: true,
      icon: Shield,
      category: 'system',
    },
    {
      id: '9',
      name: '24/7 Recording',
      description: 'Continuously record all camera feeds',
      value: false,
      icon: Clock,
      category: 'system',
    },
    {
      id: '10',
      name: 'Low Bandwidth Mode',
      description: 'Optimize video quality for slower connections',
      value: false,
      icon: Wifi,
      category: 'system',
    },
  ]);

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const toggleSetting = (id: string) => {
    setSettings(prev =>
      prev.map(setting =>
        setting.id === id ? { ...setting, value: !setting.value } : setting
      )
    );
  };

  const handleSave = () => {
    setSaveStatus('saving');
    // Simulate saving settings
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1000);
  };

  const categories = {
    ai: { name: 'AI Features', icon: Brain },
    camera: { name: 'Camera Settings', icon: Camera },
    notifications: { name: 'Notifications', icon: Bell },
    system: { name: 'System', icon: Shield },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white">Settings</h1>
        <button
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
          className={`glass px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
            saveStatus === 'saved'
              ? 'text-green-500'
              : saveStatus === 'saving'
              ? 'text-blue-500'
              : 'text-blue-500 hover:bg-opacity-30'
          }`}
        >
          <Save className={`h-4 w-4 ${saveStatus === 'saving' ? 'animate-spin' : ''}`} />
          <span className="text-sm">
            {saveStatus === 'saving'
              ? 'Saving...'
              : saveStatus === 'saved'
              ? 'Saved!'
              : 'Save Changes'}
          </span>
        </button>
      </div>

      <div className="space-y-8">
        {Object.entries(categories).map(([category, { name, icon: Icon }]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold dark:text-white">{name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {settings
                .filter(setting => setting.category === category)
                .map(setting => (
                  <div
                    key={setting.id}
                    className="glass rounded-2xl p-6 transition-all hover:bg-opacity-30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="p-3 rounded-xl bg-blue-500 bg-opacity-20">
                          <setting.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold dark:text-white">{setting.name}</h3>
                          <p className="text-sm opacity-70 dark:text-gray-300">
                            {setting.description}
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={setting.value}
                          onChange={() => toggleSetting(setting.id)}
                        />
                        <div className="w-11 h-6 glass peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Settings;