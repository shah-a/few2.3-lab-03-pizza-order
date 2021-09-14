import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://shah-a.github.io/few2.3-lab-03-pizza-order/',
  plugins: [reactRefresh()]
})
