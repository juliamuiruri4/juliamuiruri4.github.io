
---
title: cassidyCluster Playground
summary: Interactive web visualizer for the cassidyCluster greedy grouping algorithm
featured: true
status: Active
stack:
  - Algorithm
demoUrl: https://juliamuiruri4.github.io/cassidyCluster-playground/
year: 2026
order: 3
---

An interactive web visualizer for the cassidyCluster greedy grouping algorithm. Watch the algorithm cluster a shuffled sequence by repeatedly reversing the right span between matching elements, step by step, with the source code highlighted as it runs. Inspired by and credited to the [`clustering algorithm for lists by cassidoo.co`](https://cassidoo.co/post/clustering-tiles/).

## Why it matters

I'm a visual learner and I find that watching and interacting with algorithms step by step helps me understand them better. And maybe you do too! This playground lets you:

- **Visualize the algorithm** on a configurable sequence of tiles, rendered as colors, letters or numbers.
- **Step through** the algorithm one reversal at a time — forward, backward or auto-play at a speed of choice.
- **See the code highlighted live**: the right-hand panel shows the `cassidyCluster` source with the currently executing lines highlighted, so you can map each visual step to the exact branch in the algorithm.
- **Interpret each step at a glance**: an arc connects the two endpoints of the range being reversed, labeled with the target cluster
- **Experiment in a sandbox**: manually reverse any range of the input by clicking two tiles, then re-run the algorithm from your modified state.