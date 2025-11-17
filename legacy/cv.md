---
layout: blank
title: "Jure Bajt"
permalink: "/cv/"
html_title: "Jure Bajt's CV"
description: "Jure Bajt - Tech lead and full stack web engineer deeply in love with front-end development."
---

<div class="cv-container">
    <div id="main" role="main" class="cv">
        <div class="cv-header">
            <div class="cv-avatar-container">
                <img class="cv-avatar" src="/images/jure_bajt_cv.jpg" srcset="/images/jure_bajt_cv.jpg 1x, /images/jure_bajt_cv@2x.jpg 2x" alt="Jure Bajt's profile photo" />
            </div>
            <div class="cv-intro">
                <h1 class="cv-name">Jure Bajt</h1>
                <p class="cv-bio-emphasized">
                    Tech lead and full stack web engineer deeply in love with front-end development.
                </p>
                <p class="cv-bio">
                    More than 8 years of professional software engineering experience during which I've grown from a junior software developer to a tech lead, mentor and a key architect on software development projects.
                </p>
                <ul class="cv-links">
                    <li class="cv-link">
                        <a href="{{ site.baseurl }}/" target="_blank">Website</a>
                    </li>
                    <li class="cv-link">
                        <a href="{{ site.baseurl }}/articles" target="_blank">Blog</a>
                    </li>
                    {% if site.footer-links.email %}
                        <li class="cv-link">
                            <a href="mailto:{{ site.footer-links.email }}">Email</a>
                        </li>
                    {% endif %}
                    {% if site.footer-links.linkedin %}
                        <li class="cv-link">
                            <a href="https://www.linkedin.com/in/{{ site.footer-links.linkedin }}" target="_blank">LinkedIn</a>
                        </li>
                    {% endif %}
                    {% if site.footer-links.github %}
                        <li class="cv-link">
                            <a href="https://github.com/{{ site.footer-links.github }}" target="_blank">GitHub</a>
                        </li>
                    {% endif %}
                    {% if site.footer-links.twitter %}
                        <li class="cv-link">
                            <a href="https://www.twitter.com/{{ site.footer-links.twitter }}" target="_blank">Twitter</a>
                        </li>
                    {% endif %}
                </ul>
            </div>
        </div>
        <div class="cv-section-container">
            <div class="cv-section">
                <h2 class="cv-section-title">Experience</h2>
                <div class="cv-section-content">
                    <h3 class="cv-section-subtitle">
                        Front-end development
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            I have extensive experience with development of web applications. I've <strong>led teams and helped build complex web applications from the ground up</strong> as well as <strong>inherited large legacy SPAs and improved them piece by piece</strong> while making sure they continue to work undisturbed in production, with new features added to them continuously.
                        </li>
                        <li class="cv-section-bullet">
                            Because of my broad knowledge of front-end development and good software engineering practices, I've been able to <strong>greatly improve the quality of (front-end) code and architecture in teams</strong> I've worked with. This led me to the front-end lead role at Zemanta and later tech lead role at 13|37.
                        </li>
                        <li class="cv-section-bullet">
                            I consider myself to be quite good in <strong>JavaScript/TypeScript, RxJs, CSS (Sass, Less etc.) and HTML</strong>. I really try to use these technologies in a way to <strong>build robust and scalable front-end applications</strong>. I also know Webpack and Babel pretty well and have <strong>set up many build pipelines</strong> using them - most notably a custom Webpack build pipeline for a hybrid AngularJS + Angular application supporting multiple themes (client branding).
                        </li>
                        <li class="cv-section-bullet">
                            Although I'm most proficient with React and Angular, my <strong>good understanding of how internet/ browsers work, my knowledge of component based architecture and different ways of state management</strong> enable me to quickly pick up any development stack and be productive with it.
                        </li>
                        <li class="cv-section-bullet">
                            I'm passionate about <strong>delivering good UX</strong> and I really enjoy crafting UIs that "make sense" and look good.
                        </li>
                        <li class="cv-section-bullet">
                            I strive to follow best practices for <strong>creating responsive and accessible web apps</strong>. I explored these topics in my <a href="http://eprints.fri.uni-lj.si/3278/" target="_blank">diploma thesis</a> and got a lot of practice from creating more than 20 different designs for web shops built on <a href="https://www.mojekarte.si/" target="_blank">DRAGON Ticketing platform</a> earlier in my career.
                        </li>
                        <li class="cv-section-bullet">
                            Some interesting/complex widgets I've implemented include:
                            <ul class="cv-section-subbullets">
                                <li class="cv-section-subbullet">
                                    A custom table component capable of rendering huge datasets (via virtual scroll) with support for multiple data types, multi-level collapsable rows, inline editing etc. <a href="{{ site.baseurl }}/images/custom_table_component_screenshot.jpg" target="_blank">[screenshot]</a>
                                </li>
                                <li class="cv-section-subbullet">
                                    Interactive venue seat selection widget used for buying event tickets at <a href="https://www.mojekarte.si/" target="_blank">mojekarte.si</a>. <a href="{{ site.baseurl }}/images/venue_seat_selection_screenshot.jpg" target="_blank">[screenshot]</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        APIs and back-end development
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            Some of the technologies I've used on a daily basis to build application back-ends and APIs include:
                            <ul class="cv-section-subbullets">
                                <li class="cv-section-subbullet">
                                   Node.js + Express, Python + Django, Java/Kotlin + Spring framework, Firebase
                                </li>
                                <li class="cv-section-subbullet">
                                    PostgreSQL, MySQL, Firestore, BigQuery
                                </li>
                                <li class="cv-section-subbullet">
                                    GCP and AWS clouds (streaming solutions, FaaS, storage buckets etc.)
                                </li>
                                <li class="cv-section-subbullet">
                                    GraphQL
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        Developer experience, monitoring and CI/CD pipelines
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                           I have good knowledge of <strong>Docker</strong> and have used it to setup local and deployed environments. I also have some experience with Terraform to manage infrastructure as code.
                        </li>
                        <li class="cv-section-bullet">
                            I've setup a few fairly complex CI/CD pipelines (e.g. using <strong>Jenkins or GitHub Actions</strong>).
                        </li>
                        <li class="cv-section-bullet">
                            I've helped with setting up monitoring and alerting using Google Cloud Operations (Stackdriver), Grafana and Sentry.
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        My other skills and facts about me
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            Throughout my career <strong>I've took ownership of and delivered many product features</strong>. This included not only the design and implementation work, but also a lot of collaboration with product owners, users, UX specialists, engineers, data analysts and other stakeholders to <strong>make sure the right solution gets implemented for a specific end-user need</strong>.
                        </li>
                        <li class="cv-section-bullet">
                            As a team/tech lead I believe in <strong>trusting my teammates to develop solutions in an empowered manner (no micromanaging)</strong>, offering support when needed and helping steering development processes to increase team effectiveness and sense of ownership.
                        </li>
                        <li class="cv-section-bullet">
                           I've <strong>done a lot of mentoring and knowledge sharing</strong> (which I love to do!), be it in the form of in-depth design and code reviews, workshops for my teams, articles and many answered comments (e.g. articles about <a href="{{ site.baseurl }}/state-management-in-angular-with-observable-store-services/" target="_blank">state management</a> or <a href="{{ site.baseurl }}/scalable-angular-app-architecture/" target="_blank">scalable web app architecture</a>) or talks at JS meetups.
                        </li>
                        <li class="cv-section-bullet">
                            I've been a valuable contributor to hiring process design at both 13|37 and Zemanta and have <strong>interviewed more than 30 candidates</strong> in technical interviews over the past 3 years.
                        </li>
                        <li class="cv-section-bullet">
                            I don't like to do things half-assed 🧐
                        </li>
                        <li class="cv-section-bullet">
                            I'm highly organized and self-motivated.
                        </li>
                        <li class="cv-section-bullet">
                            I like to constantly be learning something new, reading a bunch of books and keeping up to date with developments in IT industry and web development.
                        </li>
                        <li class="cv-section-bullet">
                            I've worked in remote work arrangements for the past 3 years and I'm used to async communication.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cv-section-container">
            <div class="cv-section">
                <h2 class="cv-section-title">Contributions</h2>
                <div class="cv-section-content">
                    <h3 class="cv-section-subtitle">
                        Open source
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            <a href="https://www.npmjs.com/package/rxjs-observable-store" target="_blank">rxjs-observable-store</a> - an open-sourced state management solution implemented using RxJs to mimic Redux architecture.
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        Talks
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            <a href="https://slides.com/georgebyte/state-management-in-angular-with-observable-store-services#/" target="_blank">State management in Angular with observable store services</a> - <a href="https://www.meetup.com/Ljubljana-JavaScript-User-Group/events/247901199/" target="_blank">February 2018 JSmeet</a>.
                        </li>
                        <li class="cv-section-bullet">
                            <a href="https://github.com/georgebyte/examples-rendering-performance/" target="_blank">Boosting web apps' FPS</a> - <a href="https://www.meetup.com/Ljubljana-JavaScript-User-Group/events/235410586/" target="_blank">November 2016 JSmeet</a>.
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        Giving back to the community
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            Articles on my <a href="{{ site.baseurl }}/articles" target="_blank">blog</a>.
                        </li>
                        <li class="cv-section-bullet">
                            Assistant at <a href="https://www.simbioza.eu/" target="_blank">Simbioza project</a>.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cv-section-container">
            <div class="cv-section">
                <h2 class="cv-section-title">Relevant work experience</h2>
                <div class="cv-section-content">
                    <h3 class="cv-section-subtitle">
                        13|37 <span class="cv-section-subtitle-deemphasized">(Jan 2020 - Present)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        Lead consultant (Tech lead/System architect at an undisclosed multinational retailer), front-end ninja, mentor
                    </div>
                    <h3 class="cv-section-subtitle">
                        Zemanta, an Outbrain company <span class="cv-section-subtitle-deemphasized">(Mar 2016 - Jan 2020)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        Full stack web engineer, front-end lead, mentor
                    </div>
                    <h3 class="cv-section-subtitle">
                        Programski atelje A&Z d.o.o. <span class="cv-section-subtitle-deemphasized">(Feb 2014 - Feb 2016)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        Web developer on <a href="https://www.mojekarte.si/" target="_blank">DRAGON Ticketing web platform</a>
                    </div>
                    <h3 class="cv-section-subtitle">
                        Celtra, Inc. <span class="cv-section-subtitle-deemphasized">(May 2014 - Sep 2014)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        Student internship
                    </div>
                    <div class="cv-section-content-item">
                        Project:<br>
                        Using creativity to gain practical knowledge: Automated testing of web applications UIs
                    </div>
                </div>
            </div>
        </div>
        <div class="cv-section-container">
            <div class="cv-section">
                <h2 class="cv-section-title">Education</h2>
                <div class="cv-section-content">
                    <h3 class="cv-section-subtitle">
                        Faculty of Computer and Information Science, Ljubljana <span class="cv-section-subtitle-deemphasized">(2010 - 2016)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        Bachelor of Science (BSc), Computer and information science
                    </div>
                    <div class="cv-section-content-item">
                        EngD thesis:<br>
                        <a href="http://eprints.fri.uni-lj.si/3278/" target="_blank">Website optimization for mobile devices and responsive web design, Jure Bajt (2016)</a>
                    </div>
                    <h3 class="cv-section-subtitle">
                        Škofijska gimnazija Vipava <span class="cv-section-subtitle-deemphasized">(2006 - 2010)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        General high school diploma
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
