/**
 * Copy files from source code into target Stencil theme
 */

const fs = require('fs');
const path = require('path');

/**
 * List of files to copy
 */
const files = [{
    source: '../src/json-this.html',
    target: './templates/components/custom/json-this.html',
}];


/**
 * Copy files relative to this script into the current working directory
 */
class CopyFiles {
    /**
     * Constructs a new CopyFiles instance
     */
    constructor() {
        this.baseTargetDir = process.env.INIT_CWD || process.cwd();
        this.files = this.getFilesFullPath();
    }

    /**
     * Transforms the relative paths into fully qualified paths
     *
     * @return {array}   The files with fully qualified source and target paths
     */
    getFilesFullPath() {
        return files.map(({ source, target }) => ({
            source: path.resolve(__dirname, source),
            target: path.resolve(this.baseTargetDir, target),
        }));
    }

    /**
     * Creates a target directory
     *
     * @param {object} file          A file object
     * @param {string} file.target   The fully qualified target path
     */
    createTargetDirectory({ target }) {
        const splittedPath = target.split(path.sep);
        splittedPath.pop();

        const targetDirectory = splittedPath.join(path.sep);

        if (!fs.existsSync(targetDirectory)) {
            fs.mkdirSync(targetDirectory, { recursive: true });
        }
    }

    /**
     * Copies a file from source to target path
     *
     * @param {object} file          A file object
     * @param {string} file.source   The fully qualified source path
     * @param {string} file.target   The fully qualified target path
     */
    copyFile({ source, target }) {
        try {
            fs.copyFileSync(source, target);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    /**
     * Main entry point to execute the CopyFiles script task
     */
    run() {
        this.files.forEach(file => {
            this.createTargetDirectory(file);
            this.copyFile(file);
        });
    }
}

module.exports = CopyFiles;
