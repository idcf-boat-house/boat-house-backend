import time
from locust import HttpUser, task

class BoatHouse(HttpUser):
    @task(1)
    def get_shopcart(self):
        for id in range(10):
            self.client.get(f"/api/shopcart?userId={id}",name="shopcart")
            time.sleep(1)
    @task(3)
    def get_foodcategories(self):
        self.client.get("/api/foodcategories")

    @task(3)
    def get_foods(self):
        self.client.get("/api/foods")
    @task(1)
    def post_food(self):
        for id in range(10):
            self.client.post("/api/food/shopcart", json=
            {
                "userid":id, "foodid":id,"num":1,"comment":""
            })
            time.sleep(1)
    @task(3)
    def get_foods_userId(self):
        for id in range(10):
            self.client.get(f"/api/shopcart?userId={id}",name="/api/shopcart?userId=[id]")
            time.sleep(1)
    @task(1)
    def post_order(self):
        for id in range(10):
            self.client.post("/api/orders/create", json=
            {
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
            time.sleep(1)

    @task(1)
    def get_intro(self):
        self.client.get("/api/intro/intro_page?page_id=intro")
        time.sleep(1)

    @task(1)
    def post_product(self):
        self.client.post("/api/product/join", json=
            {"name":"123","telephone":"321","comment":"321321"}
        )
        time.sleep(1)

    @task(1)
    def post_signup(self):
        self.client.post("/api/signup", json=
            '{"username":"1515","password":"1515"}'
        )
        time.sleep(1)
    @task(1)
    def post_login(self):
        self.client.headers['Content-Type'] = "application/json;charset=UTF-8"
        self.client.post("/api/login", json=
            '{"username":"1515","password":"1515"}'
        )
        time.sleep(1)