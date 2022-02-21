#!/bin/bash
nohup locust -f locustfile.py --web-host=YourIP --web-port=YourPort &
