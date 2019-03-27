const path = require('path')
const fse = require('fs-extra')
const execa = require('execa')

const srcRoot = path.join(__dirname, '../src')
const libRoot = path.join(__dirname, '../lib')
const esRoot = path.join(libRoot, 'es')

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot)

const shell = cmd => execa.shell(cmd, { stdio: ['pipe', 'pipe', 'inherit'] })

const buildLib = async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${libRoot} --env-name "lib" --copy-files`)
}

const buildEsm = async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${esRoot} --env-name "esm" --copy-files`)
}

clean()

Promise.all([
  buildLib(),
  buildEsm(),
]).catch((err) => {
  if (err) {
    // eslint-disable-next-line
    console.error(err.stack || err.toString())
  }
  process.exit(1)
})
