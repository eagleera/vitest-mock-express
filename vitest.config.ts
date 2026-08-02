import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    isolate: true,
    include: ['src/test/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      // 'lcov' is required for the Coveralls upload (coverage/lcov.info)
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
})
