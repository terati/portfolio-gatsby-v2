---
slug: "/blog/quebite"
date: "2022-12-01"
title: "Quebite Learning System (In Progress)"
featuredImage: ../images/quebite_architecture.PNG
tags: ["project", "AWS"]
---
The Quebite Learning System in short is a website where users can create flashcards and quizzes for individual learning that can be share with others. Quizzes in certain formats can be taken in gamified comptetitve sessions. 

The architecture is in between a monolith and a microservice based approach. Monolithic because it reduces the amount of code, most simpler to test(initially), and saves on cost. Microserviced based for separation of crucial services for reliability and scaling. I'm hosting it completely on AWS cloud infrastructure. AWS because that is the cloud I am most familiar with. Cognito is used for the simplicity, high security, but mostly because I don't want to manage and implement it myself. It also works well with API gateway which I route all public and internal APIs to secure and provide rate limiting. 

The APIs are all REST Endpoints currently served from docker containers on ECS running Spring Boot. I'm running a RDS Postgres instance to store most of the data. I also use Dynamodb for less important data but also to dump content from the Redis instance into it. 

S3 holds all the images, etc. 

<!-- ![Quebite architecture](../images/quebite_architecture.PNG) -->


