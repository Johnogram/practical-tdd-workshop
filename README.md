# practical-tdd-workshop

### The Scenario

We are working for an eCommerce business. We have a PIM (Product Information Manager) which doesn't have any kind of functionality to communicate changes to products to external systems (Webhook or Pub/Sub).

We want to push changes to product information from our PIM to our EventBridge for our other 3rd party tools to subscribe to.

### The Solution

A small Serverless application, that on a cron, will;
- Query the PIM's API to get product information
- Compare the product state to previous state (DynamoDB persistence layer) if it exists
- If a change has happened, push event to EventBridge
  - If not change, bail out
- Store the new/current product state to the persistence layer
