import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Force propType warnings into errors so tests will fail
// eslint-disable-next-line no-console
const originalConsoleError = console.error

// eslint-disable-next-line no-console
console.error = (message) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message)
  }
  
  // This workaround (hack, I mean) does not preserve
  // the stack trace, so please keep this in mind when
  // debugging errors during test running. Disable
  // this entire thing if you encounter an indecipherable
  // error or warning.
  originalConsoleError(message)
}
