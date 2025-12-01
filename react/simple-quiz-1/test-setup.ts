import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  console.log("cleaning up each test")
  cleanup();
});
