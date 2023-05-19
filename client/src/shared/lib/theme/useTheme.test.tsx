import '../../config/matchMedia.mock';
import { getCurrentTheme } from './useTheme';

test('getCurrentTheme return "dark" or "light"', () => {
  expect(getCurrentTheme()).toMatch(/dark|light/);
});
