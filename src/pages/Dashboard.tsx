import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { AlertTriangle, Users, Camera as CameraIcon, Brain } from 'lucide-react';
import AlertCard from '../components/AlertCard';

const mockData = {
  analytics: [
    { name: 'Mon', incidents: 4, trend: 5 },
    { name: 'Tue', incidents: 3, trend: 3 },
    { name: 'Wed', incidents: 7, trend: 8 },
    { name: 'Thu', incidents: 2, trend: 4 },
    { name: 'Fri', incidents: 5, trend: 6 },
    { name: 'Sat', incidents: 1, trend: 2 },
    { name: 'Sun', incidents: 3, trend: 4 },
  ],
  recentAlerts: [
    {
      id: '1',
      timestamp: new Date(),
      type: 'intrusion',
      severity: 'high',
      description: 'Unauthorized access detected in main entrance',
      cameraId: 'CAM-001',
    },
    {
      id: '2',
      timestamp: new Date(),
      type: 'suspicious',
      severity: 'medium',
      description: 'Suspicious activity in parking area',
      cameraId: 'CAM-003',
    },
  ],
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-4 rounded-lg">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="text-sm text-blue-400">
          Incidents: {payload[0].value}
        </p>
        <p className="text-sm text-purple-400">
          Trend: {payload[1].value}
        </p>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white">AI Security Dashboard</h1>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-green-500">
          <Brain className="h-4 w-4" />
          <span className="text-sm">AI System Active</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6 dark:text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500 bg-opacity-20">
              <CameraIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm opacity-70">Active Cameras</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-6 dark:text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-500 bg-opacity-20">
              <Users className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm opacity-70">People Detected</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-6 dark:text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-500 bg-opacity-20">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm opacity-70">Active Alerts</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 dark:text-white">
          <h2 className="text-lg font-semibold mb-4">Weekly Incidents</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData.analytics}>
                <defs>
                  <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="name" 
                  stroke="currentColor" 
                  tick={{ fill: 'currentColor' }}
                />
                <YAxis 
                  stroke="currentColor"
                  tick={{ fill: 'currentColor' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="incidents"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorIncidents)"
                />
                <Area
                  type="monotone"
                  dataKey="trend"
                  stroke="#A855F7"
                  fillOpacity={1}
                  fill="url(#colorTrend)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Recent Alerts</h2>
          <div className="space-y-4">
            {mockData.recentAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard