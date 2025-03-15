export interface Alert {
  id: string;
  timestamp: Date;
  type: 'intrusion' | 'fire' | 'suspicious' | 'other';
  severity: 'low' | 'medium' | 'high';
  description: string;
  cameraId: string;
  thumbnail?: string;
}

export interface Camera {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline';
  stream: string;
}

export interface AnalyticData {
  timestamp: Date;
  value: number;
  category: string;
}