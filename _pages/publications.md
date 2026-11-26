---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Full list of publications is available on my [Google Scholar](https://scholar.google.com/citations?user=Zw2j7kwAAAAJ&hl=en&view_op=list_works&sortby=pubdate).

<div class="publications">
  {% for section in site.data.publications %}
  <section class="publications__section" aria-labelledby="{{ section.title | slugify }}">
    <h2 id="{{ section.title | slugify }}">{{ section.title }}</h2>
    <ul class="publications__list">
      {% for publication in section.items %}
      <li class="publication">
        {% include publication.html publication=publication %}
      </li>
      {% endfor %}
    </ul>
  </section>
  {% endfor %}
</div>

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
