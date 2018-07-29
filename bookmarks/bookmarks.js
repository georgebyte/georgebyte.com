(function () {
    const BOOKMARKS = [
        {
            name: 'Starred',
            iconClasses: 'far fa-star',
            panelClasses: 'starred-links',
            bookmarks: [
                {name: 'Personal mail', url: 'https://mail.google.com/mail/u/0/#inbox'},
                {name: 'Personal calendar', url: 'https://calendar.google.com/calendar/b/0/r'},
                {name: 'Outbrain mail', url: 'https://mail.google.com/mail/u/1/#inbox'},
                {name: 'Outbrain calendar', url: 'https://calendar.google.com/calendar/b/1/r'},
                {name: 'NowDoThis', url: 'http://nowdothis.com/'},
                {name: 'Pocket', url: 'https://getpocket.com/a/queue/list/'},
                {name: 'Shopping list', url: 'https://todoist.com/app?lang=en&v=856#start'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Feeds',
            iconClasses: 'far fa-newspaper',
            panelClasses: 'feeds-links',
            bookmarks: [
                {name: 'Feedly', url: 'https://feedly.com/i/latest'},
                {name: 'TweetDeck', url: 'https://tweetdeck.twitter.com/'},
                {name: 'MMC RTV Slovenija', url: 'http://rtvslo.si/'},
                {name: 'Wikipedia news', url: 'https://en.wikipedia.org/wiki/Portal:Current_events'},
                {name: 'Twitter', url: 'https://twitter.com/'},
                {name: 'YouTube', url: 'https://www.youtube.com/feed/subscriptions'},
                {name: 'Hacker News', url: 'https://news.ycombinator.com/'},
                {name: 'Investopedia', url: 'https://www.investopedia.com/'},
                {name: 'DevTube', url: 'https://dev.tube/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Trello',
            iconClasses: 'fab fa-trello',
            panelClasses: 'trello-links',
            bookmarks: [
                {name: 'Verdi', url: 'https://trello.com/b/C9wKkCVH/verdi'},
                {name: 'Z1 team main board', url: 'https://trello.com/b/TCvZgkr7/eng-z1-team-main-board?filter=member:jurebajt'},
                {name: 'Z1 team backlog', url: 'https://trello.com/b/M0KFOwHG/eng-z1-team-backlog'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'jurebajt.com',
            iconClasses: 'fas fa-user-astronaut',
            panelClasses: 'jurebajt-links',
            bookmarks: [
                {name: 'jurebajt.com', url: 'http://jurebajt.com/'},
                {name: 'Analytics', url: 'https://analytics.google.com/analytics/web/#embed/report-home/a46129147w153974228p155754283/'},
                {name: 'Disqus admin', url: 'https://jurebajt.disqus.com/admin/'},
                {name: 'Search console', url: 'https://www.google.com/webmasters/tools/home?hl=en&authuser=0'},
                {name: 'Cloudflare', url: 'https://www.cloudflare.com/a/overview/jurebajt.com'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Services',
            iconClasses: 'fas fa-concierge-bell',
            panelClasses: 'services-links',
            bookmarks: [
                {name: 'Notion', url: 'https://www.notion.so/juresworkspace/Jure-s-workspace-2e68506e6426494e929709ebe909d37a'},
                {name: 'Deezer', url: 'http://www.deezer.com/'},
                {name: 'Dropbox', url: 'https://www.dropbox.com/home'},
                {name: 'Google Drive', url: 'https://drive.google.com/drive/my-drive'},
                {name: 'Slides', url: 'https://slides.com/jurebajt'},
                {name: 'PayPal', url: 'https://www.paypal.com/si/cgi-bin/webscr?cmd=_account'},
                {name: 'LastPass', url: 'https://lastpass.com/'},
                {name: 'IFTTT', url: 'https://ifttt.com/discover'},
                {name: 'T-2 Horizont', url: 'https://horizont.t-2.net/'},
                {name: 'CovenantEyes', url: 'https://covenanteyes.com/myaccount/account/'},
                {name: 'Godaddy', url: 'https://dcc.godaddy.com/manage/'},
                {name: 'NameCheap', url: 'https://ap.www.namecheap.com/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Tools',
            iconClasses: 'fas fa-toolbox',
            panelClasses: 'tools-links',
            bookmarks: [
                {name: 'Time zone converter', url: 'https://www.timeanddate.com/worldclock/converter.html?p1=736&p2=676&p3=179&p4=224&p5=248'},
                {name: 'Export Kindle highlights', url: 'https://my.clippings.io/#/'},
                {name: 'Source code → image', url: 'https://carbon.now.sh/?bg=rgba(20,92,153,1)&t=base16-light&l=auto&ds=true&wc=false&wa=true&pv=48px&ph=32px&ln=true'},
                {name: 'Regex tester and debugger', url: 'https://regex101.com/'},
                {name: 'Diagrams creator', url: 'https://www.draw.io'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Software engineering',
            iconClasses: 'fas fa-terminal',
            panelClasses: 'software-engineering-links',
            bookmarks: [
                {name: 'GitLab', url: 'https://gitlab.com/'},
                {name: 'GitHub', url: 'https://github.com/'},
                {name: 'Gists', url: 'https://gist.github.com/jurebajt'},
                {name: 'DevDocs', url: 'http://devdocs.io/'},
                {name: 'CodePen', url: 'http://codepen.io/jurebajt/'},
                {name: 'Choose a license', url: 'http://choosealicense.com/'},
                {name: 'Contribute to open source', url: 'http://up-for-grabs.net/'},
                {name: 'Algorithms and data structures', url: 'https://github.com/trekhleb/javascript-algorithms'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Finance',
            iconClasses: '',
            panelClasses: 'finance-links',
            bookmarks: [
                {name: 'Finance', url: 'https://drive.google.com/drive/u/0/folders/1FTKghwn_GGiKUJxpHgSoRLu0tGROiCvt?ths=true'},
                {name: 'ETF trades', url: 'https://docs.google.com/spreadsheets/d/1AXZP4jamcOPKzksOj_qpoYK_epD3dAXDu46fu7aRhU8/edit#gid=662105215'},
                {name: 'Degiro', url: 'https://trader.degiro.nl/'},
                {name: 'Finance and investing', url: 'https://drive.google.com/drive/folders/1Jf9h7x7I0E1w9XDelaOaiVwVfb7kv5Zk'},
                {name: 'Portfolio', url: 'https://www.investing.com/portfolio/?portfolioID=YGdmNmcwN2g2YW5lYzQ%3D'},
                {name: 'Stocks chart', url: 'https://www.investing.com/charts/stocks-charts'},
                {name: 'eDavki', url: 'https://edavki.durs.si/OpenPortal/Pages/StartPage/StartPage.aspx'},
                {name: 'Slovar borznih izrazov', url: 'http://www.ljse.si/cgi-bin/jve.cgi?doc=791'},
                {name: 'Stock screener', url: 'https://finviz.com/'},
                {name: 'Treasury yield curve', url: 'https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/Historic-Yield-Data-Visualization.aspx'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Reading',
            iconClasses: '',
            panelClasses: 'reading-links',
            bookmarks: [
                {name: 'Goodreads', url: 'https://www.goodreads.com/'},
                {name: 'Summaries - Actionable Books', url: 'http://www.actionablebooks.com/en-ca/summaries/'},
                {name: 'Summaries - Derek Sivers', url: 'https://sivers.org/book'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Learning',
            iconClasses: '',
            panelClasses: 'learning-links',
            bookmarks: [
                {name: 'Touch typing', url: 'http://www.typingstudy.com/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Writing',
            iconClasses: '',
            panelClasses: 'writing-links',
            bookmarks: [
                {name: 'Thesaurus', url: 'http://thesaurus.com/'},
                {name: 'Dictionary', url: 'http://dictionary.reference.com/'},
                {name: 'Conjugate English verbs', url: 'http://www.verbix.com/languages/english.shtml'},
                {name: 'iSlovar', url: 'http://www.islovar.org/'},
                {name: 'Readability score', url: 'https://readability-score.com/'},
                {name: 'Hemingway', url: 'http://www.hemingwayapp.com/'},
                {name: 'Paper grader', url: 'http://www.paperrater.com/free_paper_grader'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Cooking',
            iconClasses: '',
            panelClasses: 'cooking-links',
            bookmarks: [
                {name: 'StillTasty', url: 'http://www.stilltasty.com/'},
                {name: 'Recipes by ingredients', url: 'http://www.supercook.com/#/recipes'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Crypto',
            iconClasses: '',
            panelClasses: 'crypto-links',
            bookmarks: [
                {name: 'Crypto trades', url: 'https://docs.google.com/spreadsheets/d/1RcssO8LDkTMm26MKzX7DlQcTdTiZ9JhhsVwr1wyICGs/edit'},
                {name: 'Bitstamp', url: 'https://www.bitstamp.net/market/tradeview/'},
                {name: 'Live Coin Watch', url: 'https://www.livecoinwatch.com/'},
                {name: '/r/CryptoCurrency', url: 'https://www.reddit.com/r/CryptoCurrency/'},
                {name: '/r/btc', url: 'https://www.reddit.com/r/btc/'},
                {name: '/r/Bitcoincash', url: 'https://www.reddit.com/r/Bitcoincash/'},
                {name: 'BCH Block Explorer', url: 'https://bch.btc.com/'},
                {name: 'BitInfoCharts', url: 'https://bitinfocharts.com/'},
                {name: 'Compare cryptocurrencies', url: 'https://coinlib.io/compare/2017-08-01/BTC/ETH/BCH/LTC'},
                {name: 'fork.lol', url: 'https://fork.lol/pow/work'},
                {name: 'Mempool size statis', url: 'https://jochen-hoenicke.de/queue/cash/#24h'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'IRL services',
            iconClasses: '',
            panelClasses: 'irl-services-links',
            bookmarks: [
                {name: 'Barbara Mazej Poredoš', url: 'http://www.zd-lj.si/zdlj/index.php?option=com_zdravniki&SIFRAD=20015&strm_zdr=5650&view=zdravnik&Itemid=823'},
                {name: 'Okulodent', url: 'http://www.okulodent.si/okulisticna-ambulanta.html'},
                {name: 'Računalniški servis Modul', url: 'http://www.modulcenter.si/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Fitness',
            iconClasses: '',
            panelClasses: 'fitness-links',
            bookmarks: [
                {name: 'Strength Standards', url: 'http://www.strengthstandards.co/#/home'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Faith',
            iconClasses: '',
            panelClasses: 'faith-links',
            bookmarks: [
                {name: 'Hozana', url: 'https://hozana.si/'},
                {name: 'Bible.com', url: 'https://www.bible.com/moments'},
                {name: 'Lectio Divina', url: 'http://www.ocarm.info/cgi-bin/dada/mail.cgi/list/lectiodivina/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Free time',
            iconClasses: '',
            panelClasses: 'free-time-links',
            bookmarks: [
                {name: 'TasteDive', url: 'https://tastedive.com/'},
                {name: 'T-2 tv2go', url: 'https://tv2go.t-2.net/tv/epg/2'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'P2P',
            iconClasses: '',
            panelClasses: 'p2p-links',
            bookmarks: [
                {name: 'Partis', url: 'http://www.partis.si/'},
                {name: 'Library Genesis', url: 'http://gen.lib.rus.ec/'},
                {name: 'Audiobook torrents', url: 'http://audiobookbay.nl/'},
                {name: 'Mac Torrent Download', url: 'https://mac-torrent-download.net/'},
                {name: 'Black Box Repack', url: 'http://www.blackboxrepack.com/'},
                {name: '', url: ''},
            ],
        },
    ];

    const BOOKMARKS_CONTAINER = document.getElementById('bookmarks-container');

    function init () {
        renderBookmarks(BOOKMARKS, BOOKMARKS_CONTAINER);
    }

    function renderBookmarks (bookmarks, target) {
        let generatedHtml = '';
        bookmarks.forEach(group => {
            let groupBookmarksHtml = '';
            group.bookmarks.forEach(bookmark => {
                if (bookmark.name === '' && bookmark.url === '') {
                    return;
                }
                groupBookmarksHtml += `
                    <li class="link-list__item">
                        <a href="${bookmark.url}" class="link-list__link" target="_blank">
                            ${bookmark.name}
                        </a>
                    </li>
                `;
            });
            if (groupBookmarksHtml !== '') {
                generatedHtml += `
                    <div class="panel ${group.panelClasses}">
                        <h3 class="panel__title">
                            <i class="${group.iconClasses} panel__title-icon"></i>
                            <span class="panel__title-text">${group.name}</span>
                        </h3>
                        <div class="panel__content">
                            <ul class="link-list">
                                ${groupBookmarksHtml}
                            </ul>
                        </div>
                    </div>
                `;
            }
        });
        target.innerHTML = generatedHtml;
    }

    init();
})();
