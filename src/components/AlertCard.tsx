import React from 'react';
import { Alert } from '../types';
import { AlertTriangle, Info, FireExtinguisher } from 'lucide-react';

const severityColors = {
  low: 'text-yellow-500 bg-yellow-500',
  medium: 'text-orange-500 bg-orange-500',
  high: 'text-red-500 bg-red-500',
};

const AlertIcon = ({ type }: { type: Alert['type'] }) => {
  switch (type) {
    case 'fire':
      return <FireExtinguisher className="h-5 w-5" />;
    case 'intrusion':
      return <AlertTriangle className="h-5 w-5" />;
    default:
      return <Info className="h-5 w-5" />;
  }
};

const AlertCard = ({ alert }: { alert: Alert }) => {
  const colorClass = severityColors[alert.severity];

  return (
    <div className="glass rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colorClass} bg-opacity-20`}>
            <AlertIcon type={alert.type} />
          </div>
          <div>
            <h3 className="font-semibold dark:text-white">{alert.description}</h3>
            <p className="text-sm opacity-70 dark:text-gray-300">
              Camera: {alert.cameraId} • {new Date(alert.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm glass ${colorClass} bg-opacity-20`}>
          {alert.severity.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default AlertCard;