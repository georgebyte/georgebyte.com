(function() {
    const BOOKMARKS = [
        {
            name: 'Starred',
            iconClasses: 'far fa-star',
            panelClasses: 'starred-links',
            bookmarks: [
                {
                    name: 'Personal mail',
                    url: 'https://mail.google.com/mail/u/0/#inbox',
                },
                {
                    name: 'Personal calendar',
                    url: 'https://calendar.google.com/calendar/b/0/r',
                },
                {
                    name: 'Work mail',
                    url: 'https://mail.google.com/mail/u/1/#inbox',
                },
                {
                    name: 'Work calendar',
                    url: 'https://calendar.google.com/calendar/b/1/r',
                },
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
                {
                    name: 'Wikipedia news',
                    url: 'https://en.wikipedia.org/wiki/Portal:Current_events',
                },
                {name: 'Twitter', url: 'https://twitter.com/'},
                {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/feed/subscriptions',
                },
                {name: 'Hacker News', url: 'https://news.ycombinator.com/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'georgebyte.com',
            iconClasses: 'fas fa-user-astronaut',
            panelClasses: 'georgebyte-links',
            bookmarks: [
                {name: 'georgebyte.com', url: 'https://georgebyte.com/'},
                {
                    name: 'Analytics (georgebyte.com)',
                    url:
                        'https://analytics.google.com/analytics/web/#embed/report-home/a46129147w153974228p155754283/',
                },
                {
                    name: 'Disqus admin',
                    url: 'https://jurebajt.disqus.com/admin/',
                },
                {
                    name: 'Search console',
                    url:
                        'https://www.google.com/webmasters/tools/home?hl=en&authuser=0',
                },
                {name: 'Cloudflare', url: 'https://dash.cloudflare.com/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Services',
            iconClasses: 'fas fa-concierge-bell',
            panelClasses: 'services-links',
            bookmarks: [
                {name: 'Pocket', url: 'https://app.getpocket.com/'},
                {
                    name: 'Notion',
                    url:
                        'https://www.notion.so/juresworkspace/Jure-s-workspace-2e68506e6426494e929709ebe909d37a',
                },
                {
                    name: 'Shopping list',
                    url: 'https://todoist.com/app?lang=en&v=856#start',
                },
                {name: 'Deezer', url: 'http://www.deezer.com/'},
                {name: 'Dropbox', url: 'https://www.dropbox.com/home'},
                {
                    name: 'Google Drive',
                    url: 'https://drive.google.com/drive/my-drive',
                },
                {name: 'Slides', url: 'https://slides.com/georgebyte'},
                {name: 'LastPass', url: 'https://lastpass.com/'},
                {name: 'IFTTT', url: 'https://ifttt.com/discover'},
                {
                    name: 'Brave Rewards',
                    url: 'https://publishers.basicattentiontoken.org',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Tools',
            iconClasses: 'fas fa-toolbox',
            panelClasses: 'tools-links',
            bookmarks: [
                {
                    name: 'Photopea - Photoshop clone',
                    url: 'https://www.photopea.com/',
                },
                {
                    name: 'Image optimizer',
                    url: 'https://squoosh.app/',
                },
                {
                    name: 'Time zone converter',
                    url:
                        'https://www.timeanddate.com/worldclock/converter.html?p1=736&p2=676&p3=179&p4=224&p5=248',
                },
                {
                    name: 'Export Kindle highlights',
                    url: 'https://my.clippings.io/#/',
                },
                {
                    name: 'Convert web page to PDF',
                    url: 'https://www.web2pdfconvert.com/',
                },
                {
                    name: 'Extract annotations from PDFs',
                    url: 'https://www.sumnotes.net',
                },
                {
                    name: 'Source code → image',
                    url:
                        'https://carbon.now.sh/?bg=rgba(20,92,153,1)&t=base16-light&l=auto&ds=true&wc=false&wa=true&pv=48px&ph=32px&ln=true',
                },
                {
                    name: 'Regex tester and debugger',
                    url: 'https://regex101.com/',
                },
                {
                    name: 'Wireframes and mockups creator',
                    url: 'https://app.moqups.com/',
                },
                {name: 'Diagrams creator', url: 'https://www.draw.io'},
                {
                    name: 'Fact check',
                    url: 'https://toolbox.google.com/factcheck/explorer',
                },
                {name: 'Resources for naming things', url: 'https://onym.co/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Software engineering',
            iconClasses: 'fas fa-code',
            panelClasses: 'software-engineering-links',
            bookmarks: [
                {name: 'GitLab', url: 'https://gitlab.com/'},
                {name: 'GitHub', url: 'https://github.com/'},
                {name: 'Gists', url: 'https://gist.github.com/georgebyte'},
                {
                    name: 'VS Code Settings Sync gist',
                    url:
                        'https://gist.github.com/georgebyte/fcc985ba39d708745287e4789f85e3af',
                },
                {name: 'DevDocs', url: 'http://devdocs.io/'},
                {name: 'CodePen', url: 'http://codepen.io/georgebyte/'},
                {
                    name: 'Bundlephobia - cost of adding a npm package',
                    url: 'https://bundlephobia.com/',
                },
                {name: 'Choose a license', url: 'http://choosealicense.com/'},
                {
                    name: 'Contribute to open source',
                    url: 'http://up-for-grabs.net/',
                },
                {
                    name: 'Algorithms and data structures',
                    url: 'https://github.com/trekhleb/javascript-algorithms',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Finance',
            iconClasses: 'fas fa-university',
            panelClasses: 'finance-links',
            bookmarks: [
                {
                    name: 'Finance',
                    url:
                        'https://drive.google.com/drive/u/0/folders/1FTKghwn_GGiKUJxpHgSoRLu0tGROiCvt?ths=true',
                },
                {
                    name: 'ETF trades',
                    url:
                        'https://docs.google.com/spreadsheets/d/1AXZP4jamcOPKzksOj_qpoYK_epD3dAXDu46fu7aRhU8/edit#gid=662105215',
                },
                {
                    name: 'Banka IN',
                    url: 'https://www.bankain.si/BIN/vstopna.seam?login=motp',
                },
                {name: 'Degiro', url: 'https://trader.degiro.nl/'},
                {name: 'Sava pokojninska (Mojanet)', url: 'https://www.sava-pokojninska.si/'},
                {name: 'Sharesight portfolio', url: 'https://portfolio.sharesight.com/'},
                {name: 'TradingView (stock charts)', url: 'https://www.tradingview.com/'},
                {
                    name: 'PayPal',
                    url:
                        'https://www.paypal.com/si/cgi-bin/webscr?cmd=_account',
                },
                {name: 'Uphold', url: 'https://uphold.com/dashboard'},
                {name: 'CredEarn', url: 'https://uphold-earn.mycred.io/'},
                {name: 'Valu', url: 'https://www.valu.si/'},
                {
                    name: 'Etrade',
                    url: 'https://us.etrade.com/etx/hw/accountshome',
                },
                {
                    name: 'Portfolio - Carta',
                    url:
                        'https://carta.com/investors/firm/23408/company/49917/holdings/',
                },
                {
                    name: 'Finance and investing',
                    url:
                        'https://drive.google.com/drive/folders/1Jf9h7x7I0E1w9XDelaOaiVwVfb7kv5Zk',
                },
                {
                    name: 'eDavki',
                    url:
                        'https://edavki.durs.si/OpenPortal/Pages/StartPage/StartPage.aspx',
                },
                {
                    name: 'Slovar borznih izrazov',
                    url: 'http://www.ljse.si/cgi-bin/jve.cgi?doc=791',
                },
                {name: 'Stock screener', url: 'https://finviz.com/'},
                {
                    name: 'Treasury yield curve',
                    url:
                        'https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/Historic-Yield-Data-Visualization.aspx',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Reading',
            iconClasses: 'fas fa-book',
            panelClasses: 'reading-links',
            bookmarks: [
                {name: 'Goodreads', url: 'https://www.goodreads.com/'},
                {name: 'Audible', url: 'https://www.audible.com/'},
                {name: 'Fictionary', url: 'https://thefictionary.net/'},
                {
                    name: 'Actionable Books (summaries)',
                    url: 'http://www.actionablebooks.com/en-ca/summaries/',
                },
                {
                    name: 'Derek Sivers (summaries)',
                    url: 'https://sivers.org/book',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Learning',
            iconClasses: 'fas fa-graduation-cap',
            panelClasses: 'learning-links',
            bookmarks: [
                {name: 'Touch typing', url: 'http://www.typingstudy.com/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Writing',
            iconClasses: 'fas fa-pen-fancy',
            panelClasses: 'writing-links',
            bookmarks: [
                {name: 'Thesaurus', url: 'http://thesaurus.com/'},
                {name: 'Dictionary', url: 'http://dictionary.reference.com/'},
                {
                    name: 'Conjugate English verbs',
                    url: 'http://www.verbix.com/languages/english.shtml',
                },
                {name: 'iSlovar', url: 'http://www.islovar.org/'},
                {
                    name: 'Readability score',
                    url: 'https://readability-score.com/',
                },
                {
                    name: 'APA style citation guidelines',
                    url: 'https://www.scribbr.com/category/apa-style/',
                },
                {name: 'Hemingway', url: 'http://www.hemingwayapp.com/'},
                {
                    name: 'Paper grader',
                    url: 'http://www.paperrater.com/free_paper_grader',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Cooking',
            iconClasses: 'fas fa-utensils',
            panelClasses: 'cooking-links',
            bookmarks: [
                {name: 'StillTasty', url: 'http://www.stilltasty.com/'},
                {
                    name: 'Recipes by ingredients',
                    url: 'http://www.supercook.com/#/recipes',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Crypto',
            iconClasses: 'fab fa-bitcoin',
            panelClasses: 'crypto-links',
            bookmarks: [
                {
                    name: 'Crypto trades',
                    url:
                        'https://docs.google.com/spreadsheets/d/1RcssO8LDkTMm26MKzX7DlQcTdTiZ9JhhsVwr1wyICGs/edit',
                },
                {
                    name: 'Bitstamp',
                    url: 'https://www.bitstamp.net/market/tradeview/',
                },
                {
                    name: 'Live Coin Watch',
                    url: 'https://www.livecoinwatch.com/',
                },
                {
                    name: '/r/CryptoCurrency',
                    url: 'https://www.reddit.com/r/CryptoCurrency/',
                },
                {name: '/r/btc', url: 'https://www.reddit.com/r/btc/'},
                {
                    name: '/r/Bitcoincash',
                    url: 'https://www.reddit.com/r/Bitcoincash/',
                },
                {name: 'BCH Block Explorer', url: 'https://bch.btc.com/'},
                {name: 'BitInfoCharts', url: 'https://bitinfocharts.com/'},
                {
                    name: 'Compare cryptocurrencies',
                    url:
                        'https://coinlib.io/compare/2017-08-01/BTC/ETH/BCH/LTC',
                },
                {name: 'fork.lol', url: 'https://fork.lol/pow/work'},
                {
                    name: 'Mempool size statis',
                    url: 'https://jochen-hoenicke.de/queue/cash/#24h',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'IRL services',
            iconClasses: 'fas fa-store-alt',
            panelClasses: 'irl-services-links',
            bookmarks: [
                {
                    name: 'Zdravstveni dom Logatec (Primož Brejc, dr.med.)',
                    url: 'http://zd-logatec.si/urniki/',
                },
                {
                    name:
                        'Zobozdravstvena ambulanta Logatec (Katja Markelj Kraševec dr.dent.med.)',
                    url:
                        'http://zd-logatec.si/zobozdravstvo/zobozdravstvena-dejavnost-za-odrasle/',
                },
                {
                    name: 'Okulodent',
                    url: 'http://www.okulodent.si/okulisticna-ambulanta.html',
                },
                {
                    name: 'Računalniški servis Modul',
                    url: 'http://www.modulcenter.si/',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Fitness',
            iconClasses: 'fas fa-dumbbell',
            panelClasses: 'fitness-links',
            bookmarks: [
                {
                    name: 'Strength standards',
                    url: 'https://strengthlevel.com/strength-standards',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Faith',
            iconClasses: 'fab fa-pagelines',
            panelClasses: 'faith-links',
            bookmarks: [
                {name: 'Hozana', url: 'https://hozana.si/'},
                {name: 'Bible.com', url: 'https://www.bible.com/moments'},
                {
                    name: 'Lectio Divina',
                    url:
                        'http://www.ocarm.info/cgi-bin/dada/mail.cgi/list/lectiodivina/',
                },
                {
                    name: 'Bible contradictions visualization',
                    url: 'http://bibviz.com',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Stock photos',
            iconClasses: 'fas fa-images',
            panelClasses: 'stock-photos-links',
            bookmarks: [
                {name: 'StockSnap.io', url: 'https://stocksnap.io/'},
                {name: 'Pexels', url: 'https://www.pexels.com/'},
                {name: 'Unsplash', url: 'https://unsplash.com/'},
                {name: 'Splitshire', url: 'https://www.splitshire.com/'},
                {name: 'Burst (by Shopify)', url: 'https://burst.shopify.com/'},
                {name: 'Reshot', url: 'https://www.reshot.com/'},
                {name: 'Pixabay', url: 'https://pixabay.com/'},
                {
                    name: 'Creative commons search',
                    url: 'https://search.creativecommons.org/',
                },
                {name: 'FoodiesFeed', url: 'https://www.foodiesfeed.com/'},
                {name: 'Gratisography', url: 'https://gratisography.com/'},
                {name: 'Freestocks.org', url: 'https://freestocks.org/'},
                {name: 'Picography', url: 'https://picography.co/'},
                {name: 'Foca', url: 'https://focastock.com/'},
                {name: 'Picjumbo', url: 'https://picjumbo.com/'},
                {name: 'NegativeSpace', url: 'https://negativespace.co/'},
                {name: 'Kaboom Pics', url: 'https://kaboompics.com/'},
                {name: 'SkitterPhoto', url: 'https://skitterphoto.com/'},
                {name: 'Life of Pix', url: 'https://www.lifeofpix.com/'},
                {name: 'New Old Stock', url: 'https://nos.twnsnd.co/'},
                {name: 'ISO Republic', url: 'https://isorepublic.com/'},
                {name: 'StyledStock', url: 'https://styledstock.co/'},
                {name: 'LibreStock', url: 'https://librestock.com/'},
                {name: 'Skuawk', url: 'http://skuawk.com/'},
                {
                    name: 'Site Builder Report',
                    url: 'https://www.sitebuilderreport.com/stock-up',
                },
                {
                    name: 'Bucketlistly travel photos',
                    url: 'https://www.bucketlistly.blog/photos',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'Free time',
            iconClasses: 'fas fa-gamepad',
            panelClasses: 'free-time-links',
            bookmarks: [
                {name: 'TasteDive', url: 'https://tastedive.com/'},
                {
                    name: 'Grouvee (game collection)',
                    url: 'https://www.grouvee.com/',
                },
                {name: 'SteamDB', url: 'https://steamdb.info/sales/'},
                {name: 'Good Game Deals', url: 'https://gg.deals/'},
                {
                    name: 'Hidden game gems',
                    url: 'https://steam250.com/hidden_gems.html',
                },
                {name: 'PCGamingWiki', url: 'https://www.pcgamingwiki.com/'},
                {name: 'Emuparadise', url: 'https://www.emuparadise.me/'},
                {name: 'RomsMania', url: 'https://romsmania.cc/'},
                {name: '', url: ''},
            ],
        },
        {
            name: 'Travel',
            iconClasses: 'fas fa-suitcase',
            panelClasses: 'travel-links',
            bookmarks: [
                {
                    name: "Cool cousin (locals' recommendations)",
                    url: 'https://www.coolcousin.com',
                },
                {name: '', url: ''},
            ],
        },
        {
            name: 'P2P',
            iconClasses: 'fas fa-cloud-download-alt',
            panelClasses: 'p2p-links',
            bookmarks: [
                {name: 'Partis', url: 'http://www.partis.si/'},
                {name: 'Zooqle', url: 'https://zooqle.com/'},
                {name: 'Library Genesis', url: 'http://gen.lib.rus.ec/'},
                {name: 'ZLibrary', url: 'https://b-ok.org/'},
                {name: 'Audiobook torrents', url: 'http://audiobookbay.nl/'},
                {
                    name: 'Mac Torrent Download',
                    url: 'https://mac-torrent-download.net/',
                },
                {
                    name: 'Black Box Repack',
                    url: 'http://www.blackboxrepack.com/',
                },
                {name: '', url: ''},
            ],
        },
    ];

    const SEARCH_INPUT = document.getElementById('search-input');
    const BOOKMARKS_CONTAINER = document.getElementById('bookmarks-container');
    const AUTOCOMPLETE_LIST_CLASS = 'autocomplete__list';
    const AUTOCOMPLETE_LIST_ITEM_CLASS = 'autocomplete__list-item';
    const AUTOCOMPLETE_LIST_ITEM_CLASS_FOCUSED =
        'autocomplete__list-item--focused';
    const ARROW_DOWN_KEY_CODE = 40;
    const ARROW_UP_KEY_CODE = 38;
    const ENTER_KEY_CODE = 13;
    const ESCAPE_KEY_CODE = 27;

    function init() {
        initAutocomplete(SEARCH_INPUT, getOptionsFromBookmarks(BOOKMARKS));
        renderBookmarks(BOOKMARKS, BOOKMARKS_CONTAINER);
        focusSearchInput();
        onVisibilityChange(visible => {
            visible && focusSearchInput();
        });
    }

    function focusSearchInput() {
        SEARCH_INPUT.focus();
    }

    function renderBookmarks(bookmarks, target) {
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

    function getOptionsFromBookmarks(bookmarks) {
        let options = [];
        bookmarks.forEach(group => {
            options = [
                ...options,
                ...group.bookmarks.filter(
                    bookmark => !(bookmark.name === '' && bookmark.url === '')
                ),
            ];
        });
        return options;
    }

    function initAutocomplete(input, options) {
        let focusedItemIndex;

        input.addEventListener('input', function(event) {
            closeAllLists();

            const self = this;
            const query = self.value;
            if (!query) {
                return false;
            }

            focusedItemIndex = -1;

            const autocompleteList = document.createElement('div');
            autocompleteList.setAttribute('id', `autocomplete-list-${self.id}`);
            autocompleteList.setAttribute('class', AUTOCOMPLETE_LIST_CLASS);
            self.parentNode.appendChild(autocompleteList);

            options.forEach(option => {
                const optionNameIndex = option.name
                    .toUpperCase()
                    .indexOf(query.toUpperCase());
                const optionUrlIndex = option.url
                    .toUpperCase()
                    .indexOf(query.toUpperCase());

                if (optionNameIndex !== -1 || optionUrlIndex !== -1) {
                    const link = document.createElement('a');
                    link.setAttribute('class', AUTOCOMPLETE_LIST_ITEM_CLASS);
                    link.href = option.url;
                    link.target = '_blank';

                    let itemHtml = '';
                    if (optionNameIndex !== -1) {
                        for (let i = 0; i < option.name.length; i++) {
                            if (i === optionNameIndex) {
                                itemHtml += '<strong>';
                            }
                            if (i === optionNameIndex + query.length) {
                                itemHtml += '</strong>';
                            }
                            itemHtml += option.name.charAt(i);
                        }
                    } else if (optionUrlIndex !== -1) {
                        itemHtml += option.name;
                    }
                    link.innerHTML = itemHtml;

                    link.addEventListener('click', function(e) {
                        closeAllLists();
                        self.value = '';
                    });

                    autocompleteList.appendChild(link);
                }
            });

            // Select first item
            const e = new Event('keydown');
            e.keyCode = ARROW_DOWN_KEY_CODE;
            input.dispatchEvent(e);
        });

        input.addEventListener('keydown', function(event) {
            const autocompleteList = document.getElementById(
                `autocomplete-list-${this.id}`
            );
            if (autocompleteList) {
                const autocompleteListItems = autocompleteList.getElementsByClassName(
                    AUTOCOMPLETE_LIST_ITEM_CLASS
                );

                if (event.keyCode == ARROW_DOWN_KEY_CODE) {
                    event.preventDefault();
                    removeHighlight(autocompleteListItems);
                    focusedItemIndex = highlightFocusedItem(
                        ++focusedItemIndex,
                        autocompleteListItems
                    );
                } else if (event.keyCode == ARROW_UP_KEY_CODE) {
                    event.preventDefault();
                    removeHighlight(autocompleteListItems);
                    focusedItemIndex = highlightFocusedItem(
                        --focusedItemIndex,
                        autocompleteListItems
                    );
                    highlightFocusedItem(autocompleteListItems);
                } else if (event.keyCode == ENTER_KEY_CODE) {
                    event.preventDefault();
                    if (focusedItemIndex > -1) {
                        if (autocompleteListItems) {
                            autocompleteListItems[focusedItemIndex].click();
                        }
                    }
                } else if (event.keyCode == ESCAPE_KEY_CODE) {
                    event.preventDefault();
                    closeAllLists();
                }
            }
        });

        function highlightFocusedItem(index, autocompleteListItems) {
            if (autocompleteListItems) {
                if (index >= autocompleteListItems.length) {
                    index = 0;
                }
                if (focusedItemIndex < 0) {
                    index = autocompleteListItems.length - 1;
                }
                if (autocompleteListItems[index]) {
                    autocompleteListItems[index].classList.add(
                        AUTOCOMPLETE_LIST_ITEM_CLASS_FOCUSED
                    );
                }
            }
            return index;
        }

        function removeHighlight(autocompleteListItems) {
            for (let i = 0; i < autocompleteListItems.length; i++) {
                autocompleteListItems[i].classList.remove(
                    AUTOCOMPLETE_LIST_ITEM_CLASS_FOCUSED
                );
            }
        }

        function closeAllLists(element) {
            var autocompleteLists = document.getElementsByClassName(
                AUTOCOMPLETE_LIST_CLASS
            );
            for (let i = 0; i < autocompleteLists.length; i++) {
                if (element !== autocompleteLists[i] && element !== input) {
                    autocompleteLists[i].parentNode.removeChild(
                        autocompleteLists[i]
                    );
                }
            }
        }

        document.addEventListener('click', function(event) {
            closeAllLists(event.target);
        });
    }

    function onVisibilityChange(callback) {
        var visible = true;

        function focused() {
            if (!visible) {
                callback((visible = true));
            }
        }

        function unfocused() {
            if (visible) {
                callback((visible = false));
            }
        }

        // Standards:
        if ('hidden' in document) {
            document.addEventListener('visibilitychange', function() {
                (document.hidden ? unfocused : focused)();
            });
        }
        if ('mozHidden' in document) {
            document.addEventListener('mozvisibilitychange', function() {
                (document.mozHidden ? unfocused : focused)();
            });
        }
        if ('webkitHidden' in document) {
            document.addEventListener('webkitvisibilitychange', function() {
                (document.webkitHidden ? unfocused : focused)();
            });
        }
        if ('msHidden' in document) {
            document.addEventListener('msvisibilitychange', function() {
                (document.msHidden ? unfocused : focused)();
            });
        }

        // All others:
        window.onpageshow = window.onfocus = focused;
        window.onpagehide = window.onblur = unfocused;
    }

    init();
})();
