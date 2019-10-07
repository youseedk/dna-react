const path = require('path')
const fse = require('fs-extra')
const execa = require('execa')

const srcRoot = path.join(__dirname, '../src')
const libRoot = path.join(__dirname, '../lib')
const esRoot = path.join(libRoot, 'es')

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot)

const shell = cmd => execa.shell(cmd, { stdio: ['pipe', 'pipe', 'inherit'] })

const buildCjs = async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${libRoot} --env-name "cjs"`)
}

const buildEsm = async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${esRoot} --env-name "esm"`)
}

clean()

Promise.all([
  buildCjs(),
  buildEsm(),
]).catch((err) => {
  if (err) {
    // eslint-disable-next-line
    console.error(err.stack || err.toString())
  }
  process.exit(1)
})
