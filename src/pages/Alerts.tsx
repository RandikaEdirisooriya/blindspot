import React, { useState } from 'react';
import { Alert } from '../types';
import AlertCard from '../components/AlertCard';
import { Filter, Brain } from 'lucide-react';

const mockAlerts: Alert[] = [
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
    timestamp: new Date(Date.now() - 3600000),
    type: 'fire',
    severity: 'high',
    description: 'Smoke detected in server room',
    cameraId: 'CAM-002',
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 7200000),
    type: 'suspicious',
    severity: 'medium',
    description: 'Suspicious activity in parking area',
    cameraId: 'CAM-003',
  },
];

const Alerts = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredAlerts = mockAlerts.filter(alert => {
    const severityMatch = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    const typeMatch = selectedType === 'all' || alert.type === selectedType;
    return severityMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white">Security Alerts</h1>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-blue-500">
          <Brain className="h-4 w-4" />
          <span className="text-sm">AI Monitoring Active</span>
        </div>
      </div>

      <div className="glass rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="glass rounded-lg px-4 py-2 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Severities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="glass rounded-lg px-4 py-2 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="intrusion">Intrusion</option>
              <option value="fire">Fire</option>
              <option value="suspicious">Suspicious</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};

export default Alerts;