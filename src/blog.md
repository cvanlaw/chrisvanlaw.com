---
layout: page
title: Blog
permalink: /blog/
---

## Blog

{% if site.posts.size > 0 %}
<ul class="blog-list">
  {% for post in site.posts %}
  <li class="blog-item">
    <h3 class="blog-item-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <time class="blog-item-date" datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%B %Y" }}
    </time>
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="blog-empty">No posts yet.</p>
{% endif %}
