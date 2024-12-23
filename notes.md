# What is a LLM?
Large Language Model.
What is a model?
    - trained on a lot of stuff!
    - set of probabilities, probability machine
    - predicting the next thing 
    - neural networks

Example:
- images of xrays - has cancer, doesnt have cancer: https://sites.research.google/med-palm/

# Transformers
- throw more data at something that is transformer based

# What are weights in a neural network

Consider a child going through school. They start at pre-school -> Kindergarten -> elementary school -> middle school -> highschool -> etc.

Weights are the representation of the things they learned at each grade.

# How much electricity does an api call cost?


# Chat Memory
How does claude + chatGPT handle all message history. Claude asks you to start a new chat. ChatGPT summarizes.

Passing in entire history every single time.

Memory Types in Memory
- system
- user
- assistant
- tool

# Memory limitations
- LLMs have fixed context window, fixed # of tokens it can take
- all prior messages need to be fed back in, inorder for model to have the context and figure out a response
- there are strategies to work around the context window limitation
1. handle like an LRU cache, start removing oldest tokens
2. summarize the conversation