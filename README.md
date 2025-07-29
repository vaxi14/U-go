# U-go API Documentation

## Authentication Endpoints

### Register User

Registers a new user in the system and returns an authentication token.

**Endpoint:** `POST /users/register`

#### Request Body

```json
{
  "fullname": {
    "firstname": "string",  // required, min 3 characters
    "lastname": "string"    // optional
  },
  "email": "string",        // required, valid email format
  "password": "string"      // required, min 6 characters
}
```

#### Success Response

**Code:** 201 CREATED

```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### Error Response

**Code:** 400 BAD REQUEST

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Validation Rules
- Email must be a valid email format
- First name must be at least 3 characters long
- Password must be at least 6 characters long

#### Required Headers
- Content-Type: