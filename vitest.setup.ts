// this polyfill is required because react DOM does not support intersection observer by default and react-progressive-graceful-image package uses it
import 'intersection-observer'
import 'vitest-canvas-mock'
import '@testing-library/jest-dom'
