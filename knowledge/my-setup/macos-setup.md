---
layout: knowledge-entry
title: "macOS setup"
description: "My macOS workstation setup."
date: 2018-11-23
---

**Change default shell to zsh**

{% highlight plain %}
chsh -s /bin/zsh ${USER}
{% endhighlight %}

**Install Xcode and command line tools**

{% highlight plain %}
xcode-select --install
{% endhighlight %}

**Instal MacPorts and needed ports**

Install MacPorts from [https://www.macports.org/install.php](https://www.macports.org/install.php){:target='_blank'} and then install required packages:
{% highlight plain %}
sudo port install tree git nodejs8 npm6 python27 python37 py27-pip py37-pip py37-pep8 ruby25 neovim ctags tig

sudo port select --set python python37
sudo port select --set pip pip37
sudo port select --set pep8 pep8-37

sudo port select --set ruby ruby25
{% endhighlight %}

**Instal Pip**

{% highlight plain %}
sudo pip install requests pre-commit
{% endhighlight %}

**Install global npm packages**

{% highlight plain %}
npm install -g http-server trash-cli tldr diff-so-fancy markdownlint-cli
{% endhighlight %}

**Install Homebrew and Cask**

{% highlight plain %}
mkdir ~/.homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C ~/.homebrew
brew tap caskroom/cask
{% endhighlight %}

**Install apps**

Homebrew:
* Duti - set default applications for document types and URL schemes on Mac OS X

{% highlight plain %}
brew install duti
{% endhighlight %}

Cask:
* Dropbox
* Docker
* Karabiner-Elements
* SensibleSideButtons - enable back and forward button on mouse
* Alfred 3
* Spectacle - window manager
* F.lux
* Stretchly - break reminders
* Keka
* VLC
* Kap - record screen (GIF or video)
* Calibre
* Postman (API development environment)
* Google Chrome
* AppCleaner
* iTerm2
* Day-0 (`E d MMM HH:mm`, clock with calendar in menu bar - disable default clock, reorder items in menu bar with `cmd` + click and drag)
* Android File Transfer (enable USB debugging on device via Settings > Developer options > USB debugging)
* XLD - CD rip
* Slow Quit Apps

{% highlight plain %}
brew cask install dropbox docker karabiner-elements sensiblesidebuttons alfred spectacle flux stretchly keka vlc kap calibre postman google-chrome appcleaner iterm2 day-o android-file-transfer xld

brew tap dteoh/sqa && brew cask install slowquitapps
{% endhighlight %}

App store:
* Amphetamine
* Slack
* Trello
* GIF Brewery 3 (GIF editor)

Manual install:
* Brave
* Notion
* Evernote
* Visual Studio Code
* Intellij IDEA
* JDK
* [TogglDesktop](https://toggl.com/toggl-desktop/){:target='_blank'}
* [DeezPlayer](https://deezplayer.imanel.org/){:target='_blank'}
* Bid defender (Sophos)
* Viscosity (Tunnelblick)
* VidyoConnect
* HipChat
* Send to Kindle

**Import SIGEN-CA certificate**

{% highlight plain %}
open ~/Dropbox/Documents/Certificates/jure_bajt_SIGEN-CA.p12
{% endhighlight %}

**Link SSH keys**

{% highlight plain %}
cp ~/Dropbox/Zemanta/Ssh/jure_bajt_zemanta ~/.ssh/jure_bajt_zemanta &&
cp ~/Dropbox/Zemanta/Ssh/jure_bajt_zemanta.pub ~/.ssh/jure_bajt_zemanta.pub &&

chmod 400 ~/.ssh/jure_bajt_zemanta.pub &&
chmod 400 ~/.ssh/jure_bajt_zemanta
{% endhighlight %}

**Set System Preferences to preferred defaults**

{% highlight plain %}
bash ~/Dropbox/Sync/Configs/macos-preferences.sh
{% endhighlight %}

System Preferences:

* Keyboard:
    * check "Show keyboard and emoji viewers in menu bar"
    * check "Use F1, F2 etc. as standard function keys"
    * disable auto-correct, auto-capitalize and auto-period
    * disable action for Caps Lock in Keyboard > Modifier Keys... for all keyboards in select menu
    * disable all keyboard shortcuts and enable back:
        * Shortcuts > Keyboard > Move focus to next window/Move focus to window drawer/Move focus to status menus
        * All from Shortcuts > Screen Shots
        * alt + F1 as "Select next source in input menu" shortcut in Shortcuts > Input Sources
        * alt + F2 as "Emoji & Symbols" shortcut in Shortcuts > App Shortcuts
    * enable "U.S." and "Slovenian" input sources and check "Show input menu in menu bar"
* iCloud:
    * enable only "Keychain" and "Find My Mac"
* Security & Privacy:
    * enable "FileVault"
* Users & Groups:
    * Set "Login items"
* Siri:
    * Disable Siri

**Setup Karabiner-Elements**

Link Jure's Karabiner keybindings:

{% highlight plain %}
ln -s ~/Dropbox/Sync/Karabiner-Elements/jures-karabiner-keybindings.json ~/.config/karabiner/assets/complex_modifications/jures-karabiner-keybindings.json
{% endhighlight %}

In Karabiner-Elements preferences select Complex Modifications > Add rule > Jure's Karabiner keybindings > Enable all.

**Install fonts**

{% highlight plain %}
open ~/Dropbox/Sync/Configs/Monaco\ for\ Powerline.otf
{% endhighlight %}

**Install Oh My Zsh**

{% highlight plain %}
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
{% endhighlight %}

**Install SCM Breeze**

{% highlight plain %}
git clone git://github.com/scmbreeze/scm_breeze.git ~/.scm_breeze
~/.scm_breeze/install.sh
{% endhighlight %}

**Create needed directories**

{% highlight plain %}
mkdir ~/Git &&
mkdir ~/.npm-packages &&
mkdir ~/.bin
{% endhighlight %}

**Link dotfiles**

{% highlight plain %}
rm ~/.zshrc &&
rm ~/.gitconfig &&
rm ~/.gitignore_global &&
rm ~/.npmrc &&
rm ~/.git.scmbrc &&
rm ~/.tigrc &&
rm ~/.markdownlintrc

ln -s ~/Dropbox/Sync/Configs/jure-agnoster.zsh-theme ~/.oh-my-zsh/themes/jure-agnoster.zsh-theme &&
ln -s ~/Dropbox/Sync/Configs/zshrc ~/.zshrc &&
ln -s ~/Dropbox/Sync/Configs/gitconfig ~/.gitconfig &&
ln -s ~/Dropbox/Sync/Configs/gitignore_global ~/.gitignore_global &&
ln -s ~/Dropbox/Sync/Configs/npmrc ~/.npmrc &&
ln -s ~/Dropbox/Sync/Configs/git.scmbrc ~/.git.scmbrc &&
ln -s ~/Dropbox/Sync/Configs/tigrc ~/.tigrc &&
ln -s ~/Dropbox/Sync/Configs/markdownlintrc ~/.markdownlintrc
{% endhighlight %}

**Install awscli**

{% highlight plain %}
sudo port install py36-awscli
ln -s /opt/local/bin/aws-3.6 ~/.bin/aws
{% endhighlight %}

... or

{% highlight plain %}
pip install awscli
{% endhighlight %}

**Set default applications for document types and URL schemes with duti**

{% highlight plain %}
duti -s com.microsoft.VSCode public.plain-text all &&
duti -s com.microsoft.VSCode public.source-code all &&
duti -s com.microsoft.VSCode public.unix-executable all &&
duti -s com.microsoft.VSCode public.shell-script all &&
duti -s com.microsoft.VSCode public.python-script all &&
duti -s com.microsoft.VSCode public.ruby-script all &&
duti -s com.microsoft.VSCode .js all &&
duti -s com.microsoft.VSCode .ts all &&
duti -s com.microsoft.VSCode .css all &&
duti -s com.microsoft.VSCode .less all &&
duti -s com.microsoft.VSCode .scss all &&
duti -s com.microsoft.VSCode .py all &&
duti -s com.microsoft.VSCode .json all &&
duti -s com.microsoft.VSCode .nfo all &&
duti -s com.microsoft.VSCode .md all &&
duti -s com.microsoft.VSCode .yml all &&
duti -s com.microsoft.VSCode .xml all &&

duti -s com.aone.keka .7z all &&
duti -s com.aone.keka .cab all &&
duti -s com.aone.keka .gtar all &&
duti -s com.aone.keka .gz all &&
duti -s com.aone.keka .hqx all &&
duti -s com.aone.keka .jar all &&
duti -s com.aone.keka .msi all &&
duti -s com.aone.keka .rar all &&
duti -s com.aone.keka .sit all &&
duti -s com.aone.keka .sit all &&
duti -s com.aone.keka .tar all &&
duti -s com.aone.keka .tar.gz all &&
duti -s com.aone.keka .tgz all &&
duti -s com.aone.keka .zip all &&

duti -s org.videolan.vlc .mp3 all &&
duti -s org.videolan.vlc .mp4 all &&
duti -s org.videolan.vlc .avi all &&
duti -s org.videolan.vlc .mkv all &&
duti -s org.videolan.vlc .wav all
{% endhighlight %}

**Setup AWS**

{% highlight plain %}
ln -s ~/Dropbox/Sync/Configs/aws ~/.aws
{% endhighlight %}

**Setup Brave**

* Configure settings
* Install extensions:
    * [LastPass](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd){:target='_blank'}
    * [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en){:target='_blank'} (import settings from `~/Dropbox/Sync/Vimium/vimium-options.json`)
    * [Save to Pocket](https://chrome.google.com/webstore/detail/save-to-pocket/niloccemoadcdkdjlinkgdfekeahmflj?hl=en){:target='_blank'}
    * [Evernote](https://chrome.google.com/webstore/detail/evernote-web-clipper/pioclpoplcdbaefihamjohnefbikjilc#){:target='_blank'}
    * [Video Speed Controller](https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en){:target='_blank'}

<div class="image image--centered">
    <img src="/images/video-speed-controller-config.png" alt="Video Speed Controller config" class="image__img">
</div>

**Setup Spectacle**

<div class="image image--centered">
    <img src="/images/spectacle-config.png" alt="Spectacle config" class="image__img">
</div>

**Setup f.lux**

Set preferences to recommended colors and wake up time to 5:00.

**Setup ssh config to set which keys to use for which hosts**

{% highlight plain %}
ln -s ~/Dropbox/Sync/Configs/ssh_config ~/.ssh/config
{% endhighlight %}

**Add other executables to PATH**

{% highlight plain %}
# e.g. add subl command
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl ~/.bin/subl
{% endhighlight %}
