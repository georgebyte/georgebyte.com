---
layout: default
title: "Articles"
permalink: "/articles/"
description: "My writings about pretty much anything."
---

<div class="quote">
    My writings about pretty much anything (mostly web development).
</div>

<div class="articles-list">
    {% for post in site.posts %}
        <article class="entry articles-list__entry">
            <h2 class="articles-list__entry-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

            {{ post.excerpt }}

            <a href="{{ site.baseurl }}{{ post.url }}" class="button">Read more</a>
        </article>
    {% endfor %}
</div>
