oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g component-extendor
$ component-extendor COMMAND
running command...
$ component-extendor (--version)
component-extendor/0.0.0 darwin-arm64 node-v18.14.2
$ component-extendor --help [COMMAND]
USAGE
  $ component-extendor COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`component-extendor hello PERSON`](#component-extendor-hello-person)
* [`component-extendor hello world`](#component-extendor-hello-world)
* [`component-extendor help [COMMANDS]`](#component-extendor-help-commands)
* [`component-extendor plugins`](#component-extendor-plugins)
* [`component-extendor plugins:install PLUGIN...`](#component-extendor-pluginsinstall-plugin)
* [`component-extendor plugins:inspect PLUGIN...`](#component-extendor-pluginsinspect-plugin)
* [`component-extendor plugins:install PLUGIN...`](#component-extendor-pluginsinstall-plugin-1)
* [`component-extendor plugins:link PLUGIN`](#component-extendor-pluginslink-plugin)
* [`component-extendor plugins:uninstall PLUGIN...`](#component-extendor-pluginsuninstall-plugin)
* [`component-extendor plugins:uninstall PLUGIN...`](#component-extendor-pluginsuninstall-plugin-1)
* [`component-extendor plugins:uninstall PLUGIN...`](#component-extendor-pluginsuninstall-plugin-2)
* [`component-extendor plugins update`](#component-extendor-plugins-update)

## `component-extendor hello PERSON`

Say hello

```
USAGE
  $ component-extendor hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/stoicaandrei/component-extendor/blob/v0.0.0/dist/commands/hello/index.ts)_

## `component-extendor hello world`

Say hello world

```
USAGE
  $ component-extendor hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ component-extendor hello world
  hello world! (./src/commands/hello/world.ts)
```

## `component-extendor help [COMMANDS]`

Display help for component-extendor.

```
USAGE
  $ component-extendor help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for component-extendor.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `component-extendor plugins`

List installed plugins.

```
USAGE
  $ component-extendor plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ component-extendor plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `component-extendor plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ component-extendor plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ component-extendor plugins add

EXAMPLES
  $ component-extendor plugins:install myplugin 

  $ component-extendor plugins:install https://github.com/someuser/someplugin

  $ component-extendor plugins:install someuser/someplugin
```

## `component-extendor plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ component-extendor plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ component-extendor plugins:inspect myplugin
```

## `component-extendor plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ component-extendor plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ component-extendor plugins add

EXAMPLES
  $ component-extendor plugins:install myplugin 

  $ component-extendor plugins:install https://github.com/someuser/someplugin

  $ component-extendor plugins:install someuser/someplugin
```

## `component-extendor plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ component-extendor plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ component-extendor plugins:link myplugin
```

## `component-extendor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ component-extendor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ component-extendor plugins unlink
  $ component-extendor plugins remove
```

## `component-extendor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ component-extendor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ component-extendor plugins unlink
  $ component-extendor plugins remove
```

## `component-extendor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ component-extendor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ component-extendor plugins unlink
  $ component-extendor plugins remove
```

## `component-extendor plugins update`

Update installed plugins.

```
USAGE
  $ component-extendor plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
