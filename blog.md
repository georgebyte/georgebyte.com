---
layout: default
title: "Blog"
permalink: "/blog/"
description: "A blend of software development, front-end, UX, tech and life."
---

<div class="quote">
    A blend of software development, front-end, UX, tech and life.
</div>

<div class="posts">
    {% for post in site.posts %}
        <article class="post posts__post">
            <h2 class="post-list-post-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

            <div class="entry">
                {{ post.excerpt }}
            </div>

            <a href="{{ site.baseurl }}{{ post.url }}" class="button">Read more</a>
        </article>
    {% endfor %}
</div>
