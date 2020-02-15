---
layout: blank
title: "Jure Bajt"
permalink: "/cv/"
html_title: "Jure Bajt's CV"
description: "Jure Bajt - Full stack web engineer deeply in love with front-end development."
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
                    Full stack web engineer deeply in love with front-end development.
                </p>
                <p class="cv-bio">
                    More than 5 years of professional software engineering experience during which I've grown from a junior software developer to a front-end lead, mentor and a key architect on front-end projects.
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
                            I have extensive experience with development of websites and SPAs. I've <strong>build complex web applications from the ground up</strong> as well as <strong>inherited large legacy SPAs and improved them piece by piece</strong> while making sure they continue to work undisturbed in production, with new features added to them continuously.
                        </li>
                        <li class="cv-section-bullet">
                            Because of my broad knowledge of front-end development and good software engineering practices, I've been able to <strong>greatly improve the quality of (front-end) work in teams</strong> I've worked with. This led me to becoming a front-end lead at Zemanta.
                        </li>
                        <li class="cv-section-bullet">
                            As a <strong>front-end lead</strong> I've been responsible for <strong>setting up new SPAs, making decisions about which technologies to use and application design/architecture</strong> (also implementing them in practice, including large gradual refactorings). I've been involved in designing basically every feature the teams added to front-end apps. I always tried to use these designing/consulting sessions to share as much of my knowledge as possible with the team. I've <strong>done a lot of mentoring</strong> (which I love to do!), be it in the form of in-depth design and code reviews, presentations for my team, articles and many answered articles' comments (e.g. articles about <a href="{{ site.baseurl }}/state-management-in-angular-with-observable-store-services/" target="_blank">state management</a> or <a href="{{ site.baseurl }}/scalable-angular-app-architecture/" target="_blank">scalable web app architecture</a>) or talks at JS meetups.
                        </li>
                        <li class="cv-section-bullet">
                            As far as front-end technologies go, I consider myself to be quite good in JavaScript/TypeScript, RxJs, CSS (Sass, Less etc.) and HTML. I really try to use these technologies in a way to <strong>build robust and scalable front-end applications</strong>. I also know Webpack and Babel pretty well and have <strong>set up many build pipelines</strong> using them - most notably a custom Webpack build for a hybrid AngularJS + Angular application supporting different themes.
                        </li>
                        <li class="cv-section-bullet">
                            Although I'm most proficient with Angular and React, my <strong>good understanding of how the browser works and my knowledge of component based architecture and different ways of state management</strong> enable me to quickly pick up any development stack and be productive with it.
                        </li>
                        <li class="cv-section-bullet">
                            I'm passionate about <strong>delivering good UX</strong> and I really enjoy creating UIs that "make sense" and look good.
                        </li>
                        <li class="cv-section-bullet">
                            I strive to follow best practices for <strong>creating responsive and accessible web apps</strong>. I explored these topics in my <a href="http://eprints.fri.uni-lj.si/3278/" target="_blank">diploma thesis</a> and got a lot of practice from creating more than 20 different designs for web shops built on <a href="https://www.mojekarte.si/" target="_blank">DRAGON Ticketing platform</a> earlier in my career.
                        </li>
                        <li class="cv-section-bullet">
                            Some of the more interesting/complex widgets I've implemented include:
                            <ul class="cv-section-subbullets">
                                <li>
                                    A custom table component capable of rendering huge datasets (via virtual scroll) with support for multiple data types, multi-level, collapsable rows, inline editing etc. <a href="{{ site.baseurl }}/images/custom_table_component_screenshot.jpg" target="_blank">[screenshot]</a>
                                </li>
                                <li>
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
                            Throughout my career I've implemented and <strong>delivered many product features in a "full-stack manner"</strong> - from database layer (PostgreSQL, MySQL), to application layer (Python with Django framework, Java/Kotlin with Spring framework), to rendered UI.
                        </li>
                        <li class="cv-section-bullet">
                            I've <strong>designed and implemented REST API endpoints</strong> and connected them to front-end applications.
                        </li>
                        <li class="cv-section-bullet">
                            I have some experience with AWS and S3 - I've created a video upload widget which uploads a video from the browser directly to S3 bucket using presigned URLs and converts it into multiple formats with Amazon Elastic Transcoder.
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        Developer experience and CI/CD pipelines
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                           I've set up local development environments using <strong>Docker</strong> which enabled new team members to be up and running with a single <code class="highlighter-rouge">make</code> command.
                        </li>
                        <li class="cv-section-bullet">
                            I've integrated build processes for front-end applications in many deployment pipelines (e.g. using <strong>Jenkins</strong>).
                        </li>
                        <li class="cv-section-bullet">
                            I've introduced linters and code formatters in development environments and deployment pipelines.
                        </li>
                    </ul>
                    <h3 class="cv-section-subtitle">
                        My other skills and facts about me
                    </h3>
                    <ul class="cv-section-bullets">
                        <li class="cv-section-bullet">
                            I can't imagine developing and maintaining an application without <strong>Git and good test coverage</strong> (unit and e2e tests).
                        </li>
                        <li class="cv-section-bullet">
                            I'm used to work in close <strong>collaboration with product managers and designers</strong>.
                        </li>
                        <li class="cv-section-bullet">
                            I've been a valuable contributor to hiring process design at Zemanta and have <strong>interviewed many candidates</strong> in technical interviews.
                        </li>
                        <li class="cv-section-bullet">
                            I <strong>helped to shape and implement the development process</strong> (variation of scrum) in my team at Zemanta.
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
                            I have some experience with remote work and overcoming the challenges it introduces.
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
                            <a href="https://www.npmjs.com/package/rxjs-observable-store" target="_blank">rxjs-observable-store</a> - an open sourced state management solution implemented using RxJs to mimic Redux architecture.
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
                            <a href="https://github.com/jurebajt/examples-rendering-performance/" target="_blank">Boosting web apps' FPS</a> - <a href="https://www.meetup.com/Ljubljana-JavaScript-User-Group/events/235410586/" target="_blank">November 2016 JSmeet</a>.
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
                        tretton37 <span class="cv-section-subtitle-deemphasized">(Jan 2020 - Present)</span>
                    </h3>
                    <div class="cv-section-content-item">
                        Senior lead developer, front-end ninja, mentor
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
                        Using creativity to gain practical knowledge: Automation testing of web applications
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
