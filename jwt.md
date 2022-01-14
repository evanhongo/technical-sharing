# **Token-Based Authentication**

## Token-based authentication is when you use a JWT (or other token technology) to verify the identity of a client.

<br/>

## One of the most common benefits of using a JWT for authentication is not having to fetch user data from a database; you already have the essential user information embedded directly in the token. Whenever an API receives an HTTP request with a valid JWT, it extracts the user’s information and uses it as needed.

<br/>

## This is why we call JWTs stateless: the API’s server doesn’t need to keep track of a user’s session state.

<br/>

---

# **Token-Based Authorization**

## Similar to using JWTs for stateless authentication, JWTs can also be used to store authorization-based information like user permissions and roles.

<br/>

## Storing a user’s role in a JWT means you won’t need to query a database to know whether a particular JWT is permitted to access certain resources. Based on this, JWTs can provide performance and scalability gains when it comes to authorization.

<br/>

---

# Serious Concerns

## **JWT Payload Is Visible**
## With JWTs, all payload data is visible to the parties who have token access; to reiterate—``they aren’t encrypted, but encoded.`` Authorization information may be considered sensitive information for a particular system, especially when your software systems are under compliance and governance restrictions.

<br/>

## **Stale Payload**

## Imagine a token for a customer named Bob has a payload identifying him as an "admin". It’s discovered that Bob is a bad actor (a spy or an upset employee). As a result, you disable Bob from inside your web application. Except… the JWT that Bob is using from his mobile application hasn’t expired yet.

<br/>

## Bob can keep issuing requests until the JWT expires. Since authorization is baked into the token, you aren’t querying the database to get the most up-to-date information about Bob’s role or permissions. Bob can continue to do damage to your system—even though he’s supposed to be disabled.

<br/>

## There are two common ways to avoid this scenario:

### 1. Make tokens extremely short-lived (e.g. every five minutes).
### 2. Store all tokens in a database, and allow your web application to revoke them.

## But these “solutions” come with their own issues.

<br/>

## Short-lived tokens don’t necessarily solve your problem. It wouldn’t take long for a disgruntled and disabled administrator to harm a system—even less than five minutes. This can also cause user experience issues for clients; they would have to refresh their access token more often, or sign-in to the service again. Negatively impacting user experience is something you should always try to avoid.

<br/>

## Storing valid tokens in a database so they can be revoked `destroys the main reason for using JWTs in the first place—to avoid unnecessary trips to your database.`

<br/>

## One of the best ways to mitigate this is to store user permission information in an efficient storage system like Redis.

<br/>

## **Bloated JWTs**
## JWTs are much larger than the standard session cookies that a web application would typically use. Once you start adding more data into a JWT’s payload, its size may cause HTTP requests to perform slower.