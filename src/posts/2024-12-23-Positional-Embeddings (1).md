---
title: Positional Embeddings
description: Do Positional Embeddings Get Lost Inside Transformers?
date: '2024-11-2'
categories:
  - sveltekit
  - svelte
published: true
---


Transformers require positional information to be explicitly inserted into the model, unlike RNNs, which inherently account for token positions as they process tokens sequentially. 

### Why Do Transformers Need Positional Information?
Transformers process input tokens in parallel, which makes them efficient but also position-agnostic. To encode positional information, a common practice is to:

1. Encode the position information into an embedding.
2. Add the positional embedding to the token embedding.

***Token Embedding + Positional Embedding***



<!-- ![_config.yml]({{ site.baseurl }}/images/glassner-pos-embedding.drawio.png) -->
