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
     * Check if the postinstall script shall run
     *
     * @return {boolean}   True if conditions to run the postinstall scripts are met, False otherwise
     */
    shouldRun() {
        // Do not perform postinstall script routines if "npm install" is running from own package root
        if (process.cwd() === process.env.INIT_CWD) {
            return false;
        }

        return true;
    }

    /**
     * Instantiate script classes and call their run methods, one after another
     */
    async runScripts() {
        if (!this.shouldRun()) {
            return;
        }

        for (const Script of this.scripts) {
            const script = new Script();
            // eslint-disable-next-line no-await-in-loop
            await script.run();
        }
    }
}

const postInstall = new PostInstall();
postInstall.runScripts();
