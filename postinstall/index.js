/**
 * Run scripts after package installation
 */

const CopyFiles = require('./copy-files');

/**
 * Post-Install scripts runner
 */
class PostInstall {
    /**
     * Constructs a new PostInstallScript instance
     */
    constructor() {
        this.scripts = [
            CopyFiles,
        ];
    }

    /**
     * Instantiate script classes and call their run methods, one after another
     */
    async runScripts() {
        for (const Script of this.scripts) {
            const script = new Script();
            // eslint-disable-next-line no-await-in-loop
            await script.run();
        }
    }
}

const postInstall = new PostInstall();
postInstall.runScripts();
