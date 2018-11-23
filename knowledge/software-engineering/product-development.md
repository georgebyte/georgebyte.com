---
layout: knowledge-entry
title: "Product development"
date: 2018-11-23
include_legend: true
---

## Roadmaps

The culture of <mark>experimentation where data trumps intuition</mark> and a system that makes running experiments easy allow quick and effective innovation.[^1]

## Iterations

Speed of iteration beats quality of iteration. (Boyd's law of iteration)[^1]

* [+] Faster you can get something in front of users, faster you'll verify you are building what users want and adjust the course.
* [+] To achieve faster iterations you must strip all unnecessary requirements from scope and you'll really be developing a MVP with less over-engineering.
* [-] If the quality is bellow a certain threshold, users won't use the product and you'll get no useful feedback except "The app is broken!!".

## Feature design

When you're working on end-user software, you should <mark>design the UI first</mark>.[^1]

* [>] Change in requirements will often happen in spite the final version of UI was agreed on.
* [+] A lot of edge cases can be discovered earlier in development cycle (when no code that would need refactoring has been written).
* [+] Stuff that's not possible to easily implement in UI can be discovered and possibly excluded from the project if not critical.
* [+] Much easier to create a "contract" with product managers of what will be implemented and what won't - less "feature creep".
* [+] When coding you know "exactly" what kind of UI needs to be created and what should the API look like to support such UI.
* [+] Less blockers because of trying to coordinate a UI change with product managers because an edge-case was discovered while coding.
* [-/+] Developer takes on more responsibility if the end product is bad.

<div class="vertical-separator vertical-separator--condensed"></div>

Stop thinking like "Homo Logicus" and start thinking like "Homo Sapiens" when developing end-user software. Developers sometimes can't comprehend that the <mark>average user doesn't even know what ALT+TAB does</mark>.[^1]

* [>] Expose developers to users using the product to make this even more apparent.

<div class="vertical-separator vertical-separator--condensed"></div>

The huge body of intermediate users is so dominant that you can and should ignore both beginner and expert users.[^1]

* [+] Development takes less time.
* [+] Product's feature set is focused on doing what really matters.
* [-] If new users aren't gracefully introduced to all the intermediate features, they may find the product too complicated to use and leave.
* [?] Expert users may bring a huge pile of money which you'll pass on while ignoring them.

## Users' feedback

Observe how users actually behave versus the way they tell you they behave/will behave.[^1]

* [>] What users say they will do, and what they actually do, are often two very different things.[^1]
* [>] <mark>"Feature fatigue"</mark> -> users want as much features in a product as possible until they get to use the product and become overwhelmed by all of these features.[^1]
* [-] Marketing would want to have more features because of "feature matrices" since they are important when trying to look better then competitors.

<div class="vertical-separator vertical-separator--condensed"></div>

People are the source of, and the solution to, all the problems you'll run into when building social software.[^1]

* [>] Create a way to <mark>collect feedback from your users</mark> and carefully evaluate it.

---

## References

[^1]: How to Stop Sucking and Be Awesome Instead by Jeff Atwood
