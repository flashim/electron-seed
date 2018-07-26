const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1)
    });

function getInstallerConfig() {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

    console.log(rootPath, outPath);

    return Promise.resolve({
        appDirectory: path.join(outPath, 'labcw-app-win32-ia32/'),
        authors: 'Ashim S',
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows-installer'),
        exe: 'labcw-app.exe',
        setupExe: 'labcw.exe'
    })
}