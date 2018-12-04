---
layout: knowledge-entry
title: "Shortcuts and key bindings"
description: "A collection of shortcuts and keybindings I use the most."
date: 2018-11-22
history: "https://github.com/jurebajt/jurebajt.github.io/commits/master/knowledge/my-setup/shortcuts-and-key-bindings.md"
---

## Keybindings syntax

* Separate keys using `+` if pressed simultaneously or `,` if pressed sequentially.
* Align explanations in the same group, separate from keybinding with at least 4 spaces.
* Use lowercase names for keys (`ctrl`, `alt`, `cmd`, `shift`, `esc`, `tab`, `space`, `enter`, `delete`, `backspace`, etc.).
* Modifier keys order: `hyper`, `fn`, `ctrl`, `alt`, `cmd`, `shift`, etc.
* Use `<leader>` for leader key.
* Use `arrow_<direction>` for arrow keys (e.g. `arrow_up`).
* Wrap placeholder text in `<>`.
* Put context in parenthesis before keybinding explanation.

## Window management

{% highlight plain %}
hyper + arrow_up       Fullscreen window
hyper + arrow_down     Center window
hyper + arrow_left     Move window to left half
hyper + arrow_right    Move window to right half
hyper + [              Move window to previous display
hyper + ]              Move window to next display
{% endhighlight %}

## App switching

{% highlight plain %}
hyper + w    Default web browser
hyper + f    Alfred's "Finder"
hyper + e    Code editor
hyper + d    Web development browser
hyper + c    Terminal
hyper + a    Notion
hyper + r    Evernote
hyper + s    Slack
hyper + t    Trello
hyper + l    Toggl
{% endhighlight %}

## Bookmarks

{% highlight plain %}
hyper + j, j    Open bookmarks
hyper + j, p    Open planning tools
hyper + j, f    Open all personal feeds

hyper + j, '<bookmark_name>'    Open bookmark <bookmark_name>
{% endhighlight %}

## Basic input

{% highlight plain %}
alt + f1         Select next keyboard layout
alt + f2         Open emoji picker
ctrl + space     Insert a snippet
alt + cmd + v    Clipboard history
{% endhighlight %}

## Searching

{% highlight plain %}
hyper + g    Google search

cmd + space, ' <filename>'        Search for <filename> and open
cmd + space, 'in <query>'         Search for <query> in file contents and open
cmd + space, 'find <filename>'    Search for <filename> and reveal file/directory in Finder
cmd + space, 'tags <tag>'         Search for files/directories tagged with <tag> and open
{% endhighlight %}

## JB

{% highlight plain %}
cmd + space, 'jb <query>'    Search for <query> on JB

cmd + space, 'jbworkflow'     Open workflow knowledge base entry
cmd + space, 'jbshortcuts'    Open shortcuts knowledge base entry

cmd + space, 'jbserve'    Serve JB locally
cmd + space, 'jbcode'     Open JB project in VS Code
{% endhighlight %}

## Alfred shortcuts

{% highlight plain %}
cmd + space, 'i <text>'                     Add <text> to Inbox (Gmail)
cmd + space, 'b <comma_separated_items>'    Add <comma_separated_items> to shopping list

cmd + space, 'sl <channel|people>'    Show channel or chat in Slack app

cmd + space, 'gt <query>'    Translate <query> with Google Translate
cmd + space, 'yt <query>'    Search youtube for <query>
cmd + space, 'gh <query>'    Search and open GitHub repositories/pull requests/gists etc.
cmd + space, 'gl <query>'    Search and open GitLab repositories

cmd + space, 'newfile <filename>'    Create new file in Finder

cmd + space, 'vscodeworkspace'    Link or init a Visual Studio Code workspace in current directory

cmd + space, 'zshrc'                    Edit ~/.zshrc
cmd + space, 'gitconfig'                Edit ~/.gitconfig
cmd + space, 'gitignore'                Edit ~/.gitignore_global
cmd + space, 'hosts'                    Edit /etc/hosts
cmd + space, 'karabiner-keybindings'    Edit jures-karabiner-keybindings.json

cmd + space, 'amon'     Turn Amphetamine on
cmd + space, 'amoff'    Turn Amphetamine off

cmd + space, 'caniuse <query>'    Search caniuse.com for <query>

cmd + space, 'help <query>'    Search Alfred help for <query>
{% endhighlight %}

## iTerm2

{% highlight plain %}
cmd + ]    Select next pane
cmd + [    Select previous pane

ctrl + tab            Select next tab
ctrl + shift + tab    Select previous tab
cmd + <tab_index>     Select tab at <tab_index>
{% endhighlight %}

## Visual Studio Code

### Basic commands

{% highlight plain %}
cmd + shift + p    Show all commands

cmd + shift + e    Show explorer
cmd + shift + f    Find in files
cmd + shift + g    Show Git view
cmd + shift + c    Toggle integrated terminal
cmd + shift + m    Toggle messages view
cmd + shift + x    Show extensions view
cmd + shift + y    Toggle debug console
cmd + shift + v    Markdown open preview

cmd + escape    Close panel
{% endhighlight %}

### Editors and editor groups (windows)

{% highlight plain %}
ctrl + tab    Swap between two recent editors in window

ctrl + enter    Open to side

cmd + w, \    Split window horizontally
cmd + w, -    Split window vertically

cmd + w, h    Focus left editor group
cmd + w, l    Focus right editor group
cmd + w, k    Focus above editor group
cmd + w, j    Focus below editor group

cmd + w, shift + h    Move editor left
cmd + w, shift + l    Move editor right
cmd + w, shift + k    Move editor up
cmd + w, shift + j    Move editor down

cmd + w, d            Close editor group
cmd + w, shift + d    Close instance of VS Code

cmd + e, e            Show all editors
cmd + e, d            Close active editor
cmd + e, shift + d    Close other editors in group
{% endhighlight %}

### Projects

{% highlight plain %}
cmd + p, p    List projects
cmd + p, f    Open file in project (quick open file)
{% endhighlight %}

### Files

{% highlight plain %}
cmd + r, d    Open file or navigate to directory from current directory
{% endhighlight %}

### Search

{% highlight plain %}
cmd + f       Find in file
cmd + r, r    Find symbol in file (use ":" to group symbols by type)
{% endhighlight %}

### Navigating in editor

{% highlight plain %}
ctrl + e    Scroll down
ctrl + y    Scroll up

space, j, j, <char>    Jump to <char> (Easymotion)
space, j, w            Jump to word (Easymotion)
space, j, l            Jump to line (Easymotion)

<number>, j    Jump down <number> lines
<number>, k    Jump up <number> lines

z, z    Editor center on current line
z, t    Editor top on current line
z, b    Editor bottom on current line

f, <char>            Forward find <char> in line
shift + f, <char>    Backwards find <char> in line
;                    Next match
,                    Previous match
{% endhighlight %}

### Jumping around

{% highlight plain %}
g, d        Go to definition
ctrl + o    Jump back
ctrl + i    Jump forward
{% endhighlight %}

### Editing text

{% highlight plain %}
shift + v    Visual line mode
ctrl + v     Visual block mode

cmd + d      Add selection to find next match
cmd + /      Comment line
shift + j    Join lines
ctrl + w     Delete word back
{% endhighlight %}

### Git

{% highlight plain %}
cmd + g, b            Checkout
cmd + g, l            Pull from
cmd + g, a            Stage file
cmd + g, u            Unstage file
cmd + g, c            Commit staged
cmd + g, shift + c    Commit (amend) staged
cmg + g, p            Push to
cmd + g, shift + p    Force push to
cmd + g, h            Show current branch history
cmd + g, shift + h    Show file history
cmd + g, o            Show Git output
{% endhighlight %}

## TODO: Git

{% highlight plain %}
gs    Git status
{% endhighlight %}

## Gmail

{% highlight plain %}
hyper + x    Mark all messages as read
{% endhighlight %}

## Slack

{% highlight plain %}
hyper + x    Mark all messages as read
{% endhighlight %}
