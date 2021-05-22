# MayaJS Project Templates

This repository contain all the templates that MayaJS can generate using `maya new` command using the CLI.

## Add a template

- Edit `templates.json` file with your template name and other details as shown below.

```js
{
    "template-name": {
        author: "your-name",
        description: "template-description",
        versions: [
            {
                version: "1.0.0",
                cli: "0.5.0", // Specify your template cli version
                url: "<template-repo-url>/<template-version>"
            }
            //  You can add more version
        ],
    }
}
```

- Create a PR with this format `ADD: <name-of-template> <version>`
- Wait for your PR to merge

## Use template

In order to use a template you must first install [MayaJS CLI](https://github.com/mayajs/cli). After installing the latest CLI you create your project with the template `flag`.

```sh
maya new project-name --template=template-name
```

> NOTE: You must provide a valid template name
