import http from 'k6/http';
import { group } from 'k6';

export default function () {
  // const url = 'http://test.k6.io/login';
  const url = 'http://10.80.0.18:60010';
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };


  group('get_shopcart', function () {
    for (let id = 1; id <= 100; id++) {
     	  http.get(url+"/api/shopcart?userId="+id);
     	}
  });

  group('get_foodcategories', function () {
    for (let id = 1; id <= 100; id++) {
     	  http.get(url+"/api/foodcategories");
     	}
  });

  group('get_foods', function () {
    for (let id = 1; id <= 100; id++) {
     	  http.get(url+"/api/foods");
     	}
  });

  group('post_food', function () {
  
    for (let id = 1; id <= 100; id++) {
      let payload = JSON.stringify({
        "userid": id,
        "foodid": id,
        "num": 1,
        "comment": ""
      })
      http.post(url+"/api/food/shopcart", payload, params);
    }
  });

  group('get_foods_userId', function () {
    for (let id = 1; id <= 100; id++) {
     	  http.get(url+"/api/shopcart?userId="+id);
     	}
  });

  group('post_order', function () {
  
    for (let id = 1; id <= 100; id++) {
      let payload = JSON.stringify({
          "additionalAmount": 224,
          "itemsList": [
              {
                  "shopCartItem": {
                      "Price": 112,
                      "foodid": 1,
                      "num": 2,
                      "comment": "",
                      "id": "9_1",
                      "userid": 9,
                      "Name": "332"
                  },
                  "foodName": "332",
                  "price": 112,
                  "foodId": 1,
                  "foodNum": 2,
                  "foodPrice": 112
              }
          ],
          "note": "",
          "userName": id,
          "userId": id
      })
      http.post(url+"/api/orders/create", payload, params);
    }
  });

  group('get_intro', function () {
    http.get(url+"/api/intro/intro_page?page_id=intro");
  });


  group('post_product', function () {
  
    let payload = JSON.stringify({
      "name":"123","telephone":"321","comment":"321321"
    })
    http.post(url+"/api/food/shopcart", payload, params);
  });

  group('post_signup', function () {
  
    let payload = JSON.stringify({
      "username":"1515","password":"1515"
    })
    http.post(url+"/api/signup", payload, params);
  });

  group('post_login', function () {
  
    let payload = JSON.stringify({
      "username":"1515","password":"1515"
    })
    http.post(url+"/api/login", payload, params);
  })



}