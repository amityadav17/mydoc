define({ "api": [
  {
    "group": "ADMIN",
    "type": "post",
    "url": "/admin/session",
    "title": "Admin session management",
    "name": "Admin_session_management",
    "description": "<p>Create a admin session. Session is valid for 24 hrs</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address associated with the user’s account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password associated with the user’s account.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_INVALID_CREDENTIALS_TOKEN",
            "description": "<p>Invalid credentials. Token generation failed.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_FORMAT",
            "description": "<p>JSON request body doesn't match expected format.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_JSON",
            "description": "<p>Cannot validate JSON request body.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_CREATION_EMAIL_FAIL",
            "description": "<p>Login/Email required.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_CREATION_PASSWORD_FAIL",
            "description": "<p>Password Required.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_INVALID_PASSWORD_CREDENTIALS",
            "description": "<p>Invalid credentials Invalid password.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_DATABASE_QUERY_FAIL",
            "description": "<p>Fail to load the user current information.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_LOAD_QUERY_FAIL",
            "description": "<p>Fail to load the user current information.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_UNKNOWN_CREDENTIALS",
            "description": "<p>Invalid credentials&quot;, &quot;Unknown user.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "Admin-Account",
            "description": "<p>Admin account information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cpXVCJ9.eyJleHBpcnkiOjE1NDIxMTUzNTIuNDgwNTMsInR5cGUiOiJBdLVRva2VuIiwiZGF0YSI\n    6eyJ1dWlkIjoiMDJmNZTY3ZS0xMWU4LTg1NzgtMDgwMDI3OGQxMjQ3IiwidHlwZSI6Imd1ZXN0In19.D9TAQMpDCumiquC11435-LXVy-12Eni6PwZr\n    h0JXBwE\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "ADMIN"
  },
  {
    "group": "ADMIN",
    "type": "post",
    "url": "/admin/user",
    "title": "Create Admin account",
    "name": "Create_a_new_admin_account",
    "description": "<p>Create a new admin account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>The admin user’s first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>The admin user’s last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address associated with the admin user’s account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password associated with the admin user’s account. Must Have minimum 8 charcters, 1 Capital Letter and Numeric value</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_CREATION_EMAIL_FAIL",
            "description": "<p>Login/Email required..</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_FORMAT",
            "description": "<p>JSON request body doesn't match expected format.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_JSON",
            "description": "<p>Cannot validate JSON request body.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_CREATION_PASSWORD_FAIL",
            "description": "<p>&quot;Password Required&quot;.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_LOAD_FAIL",
            "description": "<p>Unable to load the user information that has just been created.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_ALREADY_EXIST_FAIL",
            "description": "<p>User already exists in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_CREATION_EMAIL_FAIL",
            "description": "<p>Email doesn't meet requirements.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_CREATION_PASSWORD_FAIL",
            "description": "<p>Password doesn't meet requirements.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_ENCRYPTION_FAIL",
            "description": "<p>The encryption of the password has failed.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_USER_DATABASE_CREATION_QUERY_FAIL",
            "description": "<p>The creation of the user has failed.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST",
            "description": "<p>Failed to decode Auth-Token. Not a 'Auth-Token'.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_UUID",
            "description": "<p>Auth-Token is not valid. 'uuid' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_TYPE",
            "description": "<p>Auth-Token' is malformed.'type' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_NOT_AUTHENTICATED",
            "description": "<p>Auth-Token is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_SESSION_EXPIRED",
            "description": "<p>Auth-Token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "FORBIDDEN",
            "description": "<p>User doesn't have access to this resource.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "Admin-Account",
            "description": "<p>Admin account information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"lastname\": \"lname123\",\n    \"firstname\": \"fname123\",\n    \"login\": \"test12345@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "ADMIN",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Auth-Token required for authorization. Run session api to get Auth-Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\" : \"application/json\",\n    \"Auth-Token\" : \"eyJ0eXAiOiJKV1QiCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InV1aWQiOiJoiZ3Vlc3QifSwiZXhwaXJ5IjoxNTQyMTA0OD\n    gxLjQxNTYzNzUsInR5cGUOiJBdXRoLVRva2VuIn0.K2xdhYQLXu27O7pgIJGi5rmsAqhZpazItiKpk7NOi8\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Content",
    "type": "post",
    "url": "/content/list/",
    "title": "Add Content to Content Tree",
    "name": "Add_Content_to_Content_Tree",
    "description": "<p>Add media content item information to content Tree</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "genre",
            "description": "<p>The genre of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>The director of the media.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "idbm_score",
            "description": "<p>The imdb score of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "popularity",
            "description": "<p>The popularity of the content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_DATABASE_QUERY_FAIL",
            "description": "<p>Unable to add content.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_FORMAT",
            "description": "<p>JSON request body doesn't match expected format.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_JSON",
            "description": "<p>Cannot validate JSON request body.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST",
            "description": "<p>Failed to decode Auth-Token. Not a 'Auth-Token'.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_UUID",
            "description": "<p>Auth-Token is not valid. 'uuid' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_TYPE",
            "description": "<p>Auth-Token' is malformed.'type' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_NOT_AUTHENTICATED",
            "description": "<p>Auth-Token is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_SESSION_EXPIRED",
            "description": "<p>Auth-Token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "FORBIDDEN",
            "description": "<p>User doesn't have access to this resource.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "Content-item",
            "description": "<p>Media content item information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Success\": \"Content added Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "Content",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Auth-Token required for authorization. Run session api to get Auth-Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\" : \"application/json\",\n    \"Auth-Token\" : \"eyJ0eXAiOiJKV1QiCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InV1aWQiOiJoiZ3Vlc3QifSwiZXhwaXJ5IjoxNTQyMTA0OD\n    gxLjQxNTYzNzUsInR5cGUOiJBdXRoLVRva2VuIn0.K2xdhYQLXu27O7pgIJGi5rmsAqhZpazItiKpk7NOi8\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Content",
    "type": "DELETE",
    "url": "/content/list/{content_id}",
    "title": "Delete Content item",
    "name": "Delete_Content_information_for_the_provided_content_id",
    "description": "<p>Delete media content item information with the provided content id</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_ITEM_DELETE_FAIL",
            "description": "<p>A content item id needs to be specified</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_ITEM_DELETE_VALIDATION_FAIL",
            "description": "<p>An error occured while validating the content deletion.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_CONTENT_ID",
            "description": "<p>'Content id not found. Invalid content id.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_CONTENT_DATABASE_QUERY_FAIL",
            "description": "<p>Unable to delete content.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST",
            "description": "<p>Failed to decode Auth-Token. Not a 'Auth-Token'.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_UUID",
            "description": "<p>Auth-Token is not valid. 'uuid' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_TYPE",
            "description": "<p>Auth-Token' is malformed.'type' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_NOT_AUTHENTICATED",
            "description": "<p>Auth-Token is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_SESSION_EXPIRED",
            "description": "<p>Auth-Token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "FORBIDDEN",
            "description": "<p>User doesn't have access to this resource.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "Object[]",
            "optional": false,
            "field": "Updated-Content-Item",
            "description": "<p>Updated Content item information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "Content",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Auth-Token required for authorization. Run session api to get Auth-Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\" : \"application/json\",\n    \"Auth-Token\" : \"eyJ0eXAiOiJKV1QiCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InV1aWQiOiJoiZ3Vlc3QifSwiZXhwaXJ5IjoxNTQyMTA0OD\n    gxLjQxNTYzNzUsInR5cGUOiJBdXRoLVRva2VuIn0.K2xdhYQLXu27O7pgIJGi5rmsAqhZpazItiKpk7NOi8\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Content",
    "type": "get",
    "url": "/content/list",
    "title": "Get Content Tree",
    "name": "Get_Content_Tree",
    "description": "<p>Request the whole content tree</p>",
    "permission": [
      {
        "name": "admin, user, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>URL query parameter to do a full text search based on database.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "DATA_RETRIEVAL_FAILED",
            "description": "<p>Failed to retrieve content data</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "METHOD_NOT_ALLOWED",
            "description": "<p>Method not allowed</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST",
            "description": "<p>Failed to decode Auth-Token. Not a 'Auth-Token'.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_UUID",
            "description": "<p>Auth-Token is not valid. 'uuid' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_TYPE",
            "description": "<p>Auth-Token' is malformed.'type' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_NOT_AUTHENTICATED",
            "description": "<p>Auth-Token is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_SESSION_EXPIRED",
            "description": "<p>Auth-Token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "FORBIDDEN",
            "description": "<p>User doesn't have access to this resource.</p>"
          }
        ],
        "Error - 404": [
          {
            "group": "Error - 404",
            "type": "Object",
            "optional": false,
            "field": "DATA_RETRIEVAL_FAILED",
            "description": "<p>Failed to retrieve content data</p>"
          }
        ],
        "Error - 405": [
          {
            "group": "Error - 405",
            "type": "Object",
            "optional": false,
            "field": "METHOD_NOT_ALLOWED",
            "description": "<p>Method not allowed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "Content-List",
            "description": "<p>List of all content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"112\": {\n        \"genre\": [\"Action\", \" Adventure\", \" Fantasy\", \"Sci-Fi\"],\n        \"title\": \"Star Wars : Episode VI - Return of the Jedi\",\n        \"imdb_score\": \"8.3\",\n        \"popularity\": \"83.0\",\n        \"director\": \"Richard Marquand\"\n    },\n    \"174\": {\n        \"genre\": [\"Comedy\", \"Music\", \"Talk-Show\"],\n        \"title\": \"The Tonight Show Starring Johnny Carson\",\n        \"imdb_score\": \"8.3\",\n        \"popularity\": \"83.0\",\n        \"director\": \"Bobby Quinn\"\n    },\n    \"224\": {\n        \"genre\": [\"Action\", \" Adventure\", \"Sci-Fi\"],\n        \"title\": \"Star Trek : The Next Generation\",\n        \"imdb_score\": \"8.8\",\n        \"popularity\": \"88.0\",\n        \"director\": \"Cliff Bole\"\n    },\n    \"244\": {\n        \"genre\": [\"Action\", \"Adventure\", \" Fantasy\", \"Sci-Fi\"],\n        \"title\": \"Star Wars : Episode I - The Phantom Menace\",\n        \"imdb_score\": \"6.4\",\n        \"popularity\": \"64.0\",\n        \"director\": \"George Lucas\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "Content",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Auth-Token required for authorization. Run session api to get Auth-Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\" : \"application/json\",\n    \"Auth-Token\" : \"eyJ0eXAiOiJKV1QiCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InV1aWQiOiJoiZ3Vlc3QifSwiZXhwaXJ5IjoxNTQyMTA0OD\n    gxLjQxNTYzNzUsInR5cGUOiJBdXRoLVRva2VuIn0.K2xdhYQLXu27O7pgIJGi5rmsAqhZpazItiKpk7NOi8\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Content",
    "type": "PUT",
    "url": "/content/list/{content_id}",
    "title": "Update Content item",
    "name": "Update_Content_information_for_the_provided_content_id",
    "description": "<p>Update media content item information with the provided content id</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "genre",
            "description": "<p>The genre of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director",
            "description": "<p>The director of the media.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "idbm_score",
            "description": "<p>The imdb score of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "popularity",
            "description": "<p>The popularity of the content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_DATABASE_QUERY_FAIL",
            "description": "<p>Unable to update content.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_ITEM_UPDATE_FAIL",
            "description": "<p>A content item id needs to be specified</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_UPDATE_FAIL",
            "description": "<p>Unable to load the content information that has just been updated.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_CONTENT_ID",
            "description": "<p>'Content id not found. Invalid content id.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "CONTENT_DATABASE_LOAD_QUERY_FAIL",
            "description": "<p>Fail to load the Content current information.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ADMIN_CONTENT_DATABASE_QUERY_FAIL",
            "description": "<p>Unable to update content.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST",
            "description": "<p>Failed to decode Auth-Token. Not a 'Auth-Token'.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_UUID",
            "description": "<p>Auth-Token is not valid. 'uuid' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_TYPE",
            "description": "<p>Auth-Token' is malformed.'type' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_NOT_AUTHENTICATED",
            "description": "<p>Auth-Token is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_SESSION_EXPIRED",
            "description": "<p>Auth-Token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "FORBIDDEN",
            "description": "<p>User doesn't have access to this resource.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "Updated-Content-Item",
            "description": "<p>Updated Content item information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"content_id\":\"254\"\n    \"genre\": [\"Action\", \" Adventure\", \" Fantasy\", \"Sci-Fi\"],\n    \"title\": \"Star Wrs : Episo VI - Return of the Jdi\",\n    \"imdb_score\": \"8.3\",\n    \"popularity\": \"83.0\",\n    \"director\": \"Richard Marquand\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "Content",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Auth-Token required for authorization. Run session api to get Auth-Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\" : \"application/json\",\n    \"Auth-Token\" : \"eyJ0eXAiOiJKV1QiCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InV1aWQiOiJoiZ3Vlc3QifSwiZXhwaXJ5IjoxNTQyMTA0OD\n    gxLjQxNTYzNzUsInR5cGUOiJBdXRoLVRva2VuIn0.K2xdhYQLXu27O7pgIJGi5rmsAqhZpazItiKpk7NOi8\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "USER",
    "type": "post",
    "url": "/user",
    "title": "Add User account",
    "name": "Add_a_new_user_account",
    "description": "<p>Add a new user account</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>The user’s first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>The user’s last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address associated with the user’s account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password associated with the user’s account. Must Have minimum 8 charcters, 1 Capital Letter and Numeric value</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_CREATION_FAIL",
            "description": "<p>Unable to load the user information that has just been created.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_FORMAT",
            "description": "<p>JSON request body doesn't match expected format.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_JSON",
            "description": "<p>Cannot validate JSON request body.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_DATABASE_QUERY_FAIL",
            "description": "<p>Fail to verify if the user already exist.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_ALREADY_EXIST_FAIL",
            "description": "<p>User already exists in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_CREATION_EMAIL_FAIL",
            "description": "<p>Email doesn't meet requirements.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_CREATION_PASSWORD_FAIL",
            "description": "<p>Password doesn't meet requirements.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_CREATION_ENCRYPTION_FAIL",
            "description": "<p>The encryption of the password has failed.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_DATABASE_CREATION_QUERY_FAIL",
            "description": "<p>The creation of the user has failed.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST",
            "description": "<p>Failed to decode Auth-Token. Not a 'Auth-Token'.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_UUID",
            "description": "<p>Auth-Token is not valid. 'uuid' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_FORMAT_TYPE",
            "description": "<p>Auth-Token' is malformed.'type' is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_NOT_AUTHENTICATED",
            "description": "<p>Auth-Token is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_SESSION_EXPIRED",
            "description": "<p>Auth-Token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "FORBIDDEN",
            "description": "<p>User doesn't have access to this resource.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "User-Account",
            "description": "<p>User account information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"lastname\": \"lname123\",\n    \"firstname\": \"fname123\",\n    \"login\": \"test12345@email.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "USER",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "object",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Auth-Token required for authorization. Run session api to get Auth-Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\" : \"application/json\",\n    \"Auth-Token\" : \"eyJ0eXAiOiJKV1QiCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InV1aWQiOiJoiZ3Vlc3QifSwiZXhwaXJ5IjoxNTQyMTA0OD\n    gxLjQxNTYzNzUsInR5cGUOiJBdXRoLVRva2VuIn0.K2xdhYQLXu27O7pgIJGi5rmsAqhZpazItiKpk7NOi8\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "USER",
    "type": "post",
    "url": "/session",
    "title": "User session management",
    "name": "User_session_management",
    "description": "<p>Create a User session. If email and password are both empty then user will be logged in as guest and if not they will be logged in as user. Session is valid for 24 hrs</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address associated with the user’s account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password associated with the user’s account.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_INVALID_CREDENTIALS_TOKEN",
            "description": "<p>Invalid credentials. Token generation failed.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_FORMAT",
            "description": "<p>JSON request body doesn't match expected format.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "INVALID_REQUEST_JSON",
            "description": "<p>Cannot validate JSON request body.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_DATABASE_QUERY_FAIL",
            "description": "<p>Fail to load the user current information.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_UNKNOWN_INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials Unknown user.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "USER_INVALID_PASSWORD_CREDENTIALS",
            "description": "<p>Invalid credentials Invalid password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "User-Account",
            "description": "<p>User account information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cpXVCJ9.eyJleHBpcnkiOjE1NDIxMTUzNTIuNDgwNTMsInR5cGUiOiJBdLVRva2VuIiwiZGF0YSI\n    6eyJ1dWlkIjoiMDJmNZTY3ZS0xMWU4LTg1NzgtMDgwMDI3OGQxMjQ3IiwidHlwZSI6Imd1ZXN0In19.D9TAQMpDCumiquC11435-LXVy-12Eni6PwZr\n    h0JXBwE\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "catalog/apidoc/apidoc.py",
    "groupTitle": "USER"
  }
] });
