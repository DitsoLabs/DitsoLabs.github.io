---
title: Blog
layout: blog-index
permalink: /blog/
---
# Blog
<ul>
  {% for post in site.posts %}
  {% if post.show == true %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}  
  {% endfor %}
</ul>