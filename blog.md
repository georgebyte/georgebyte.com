---
layout: default
title: "Blog"
permalink: "/blog/"
description: "My writings about pretty much anything."
---

<div class="quote">
    My writings about pretty much anything.
</div>

<div class="blog-posts">
    {% for post in site.posts %}
        <article class="entry blog-posts__entry">
            <h2 class="blog-posts__entry-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

            {{ post.excerpt }}

            <a href="{{ site.baseurl }}{{ post.url }}" class="button">Read more</a>
        </article>
    {% endfor %}
</div>
