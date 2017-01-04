# URLShortner
A node module to handle the creation of a randomly generated string of text with a simple RESTful API, with only one route, so that external users can interact
with the module and generate a shortened URL.
### Prerequisites
	
	* Node.js latest stable version

### Setup and run

```
cd to project directory and run:
	* npm install
	* npm run 
By default this server will listen on port 3000
```

### API End Points

```
POST /api/v1/url
```

### Description

```
Accept a long url in parameter and returns a randomly generated and unique short url.
```
### Parameters

```
Content-type header with a value of  application/x-www-form-urlencoded

Parameters:
	* url :  i,e; https://www.google.com
```

### Return format

```
A HTTP 200 OK header along with a JSON-encoded object including 
	* success : true/false 
	* data : {url:'short_url_will_be_here'}
	* msg : 'success or error message'
	* code : 200 (it will HTTP standard status code 200 for success)
```

### Errors

400 Bad Request — One or more of the essential parameters is missing. You have either missed the file attachment, photo_id, or the upload key.
401 Unauthorized — One or more parameters required to authenticate your request is missing.
403 Forbidden — Authentication of the request has failed. This means although the parameter in question was present, its verification has failed.
404 Not Found — The photo_id provided is not known to our database.