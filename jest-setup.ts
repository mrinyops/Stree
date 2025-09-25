// Extend jest with React Native Testing Library matchers
import '@testing-library/jest-native/extend-expect';

// react-hook-form setup for testing
// Some libs expect window to exist
// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;
