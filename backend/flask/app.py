from flask import Flask, request, jsonify
import os
import requests

app = Flask(__name__)

SPRING_BOOT_URL = os.getenv("SPRING_BOOT_URL", "http://localhost:8080/tasks")

@app.route("/tasks", methods=["POST"])
def create_task():
    data = request.json
    response = requests.post(SPRING_BOOT_URL, json=data)
    return jsonify(response.json()), response.status_code

@app.route("/tasks", methods=["GET"])
def get_tasks():
    response = requests.get(SPRING_BOOT_URL)
    return jsonify(response.json()), response.status_code

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
