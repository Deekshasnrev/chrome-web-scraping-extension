import sys
import json
import struct
import requests
from bs4 import BeautifulSoup

# Function to read messages from Chrome extension
def read_message():
    raw_length = sys.stdin.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('I', raw_length)[0]
    message = sys.stdin.read(message_length)
    return json.loads(message)

# Function to send a message to the Chrome extension
def send_message(message):
    encoded_message = json.dumps(message).encode('utf-8')
    sys.stdout.write(struct.pack('I', len(encoded_message)))
    sys.stdout.write(encoded_message)
    sys.stdout.flush()

# Perform the scraping task
def scrape_website():
    url = "https://example.com"  # Example URL
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    data = soup.get_text()
    return {"data": data}

if __name__ == "__main__":
    while True:
        message = read_message()
        if message['command'] == 'scrape':
            result = scrape_website()
            send_message(result)
