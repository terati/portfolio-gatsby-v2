---
slug: "/blog/personal_blog"
date: "2022-09-04"
title: "Personal Website"
featuredImage: ../images/portfolio_blog.PNG
description: "This is my personal webite!"
tags: ["project", "article"]
---

This website (version 2) exists to showcase some of my projects and also do some experimentation with the Gatsby React Framework. I've always wanted to try the framework since I noticed a lot of the sites that used it had this cool blur loading image loading effect. It also has GraphQL built into it. 

The UI makes use of the popular Material UI library(MUI). I don't know exactly why but I feel that the gatsby build times and live reloading is very slow compared to NextJs. I would assume it would be somewhat fast because of caching. Maybe the amount of images, and graphql? The build time seems to take at several minutes and the reload can take like 10 of second why I find to be annoying. It reminds of time to resimulate waveforms or taking hours to recompile FPGA code.

The site is pretty simple. The intent of it is to experiment with things. I do not expect anyone to actually read any of the content. In fact I'm writing all of this just to take some more space. I site is not the best looking but good enough for now. The main page navigates to the "about page". I rather people know the bare minimum about me so I put old drawings I've done to cover space. Then there is the blog page. You can peruse through a plethora of articles. You search for a particular article or narrow downwards using the tags. The articles are generated from MDX. Code styling uses the Prism plugin. 

One thing I wanted to experiment with was the theme. Many sites have this toggle feature between light and dark modes and it seems that there are many ways that people implement it. One way seems to be to implement it at a per component basis. Then a provider or a state is passed to it determining if the component should rerender to be in the dark or light mode. Another method seems to be to have more of a "global" css variables that gets passed into every component. The advantage here is that someone wanted to change the theme color to a different shade, you would only have to change 1 variable instead of many variables residing in many components. However, I think that doing this gets really confusing and doesn't really help with component reusability. Then, maybe you can do a bit of both where each component can toggle but also be written in a flexible way where the themes could be overwritten. 

I took out the feature to send me a message mostly because it seemed to be all spam or weirdoes lol.

I think Gatsby is interesting but I would prefer not to use it ever again. 

![Performace](../images/portfolio_performance.PNG)

I need to work on optimizing the image sizes and compressing the images into JPGs to improve on the performance aspect. 

