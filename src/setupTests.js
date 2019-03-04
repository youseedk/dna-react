import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Force propType warnings into errors so tests will fail
const originalConsoleError = console.error

console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message)
  }

  originalConsoleError(message)
}
