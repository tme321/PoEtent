import react from '@vitejs/plugin-react';

/**
 * Build configuration for client code, executed in the browser
 */

 export default {
  plugins: [
    react()
  ],
}



/*
import { getClientConfiguration } from '../../../configuration'

export default getClientConfiguration()
*/