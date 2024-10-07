import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aitsolutions.challenge',
  appName: 'challenge',
  webDir: 'dist',
  "server": {
    "cleartext": true,
    "androidScheme": "http"
  },
  "loggingBehavior": "debug"
};

export default config;
