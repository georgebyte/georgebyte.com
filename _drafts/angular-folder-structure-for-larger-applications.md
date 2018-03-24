---
layout: post
title: "Angular folder structure for larger applications"
description: "Best practices for folder structure in larger Angular applications."
---

<p class="post-excerpt">
    TODO
</p>

I still remember the time a few years ago when I first started learning front-end development. After I've learned the most important JavaScript concepts and got a firm grasp of HTML and CSS, I decided to venture out a bit and try to use a framework (AngularJS) to build some simpler single page applications.

I've read trough AngularJS docs and watched some video courses. I felt I was ready to start the development of my own app. I installed all required npm packages, setup a simple build pipeline and I was ready to go. Except that I completely froze at that point. I stared at my screen for a good few minutes and then started my Googling spree in order to find a solution to this big challenge I was suddenly faced with: Where do I even put things?

Eventually I've seen enough projects in the wild and read enough of best practices blog post and I finally decided to go with a structure I compiled from all of this. It may sound funny when I look back at it now, but at the moment my biggest concern was how to structure my app so that I don't completely screw things up right at the beginning.

I remember how thankful I was for open source projects on GitHub using AngularJS where I could get some ideas. They really helped me to learn and become much better at creating architectures for single page applications. And because it is a good practice to give something back to the community I decided to share with you what the folder structure looks like for our dashboard front-end app at Zemanta. It is inspired br Angular best practices and it was gradually developed based on our needs. I hope it will provide a good template for you to build upon, especially for all the beginners out there that may be a bit lost like I was when I was first starting out. 
