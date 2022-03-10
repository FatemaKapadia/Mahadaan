data = [
     [
      "Apang Kalyankari Shikshan Sanstha",
      "411040",
      "8856998600, 7350088798",
      "10:00:00 AM",
      "4:00:00 PM",
      "Rotaract Club of Pune Sunrise "
    ],
    [
      "Chatrapati Shivaji Maharaj Smarak , Khopoli",
      "410203",
      "8983498543, 9763211039",
      "10:00:00 AM",
      "2:00:00 PM",
      "Rotaract Club Of Khopoli",
      "",
      "Mihir Vivek Butala"
    ],
    [
      "PMC- Haribhau Sane Parking Lot",
      "411030",
      "9405822061",
      "11:00:00 AM",
      "4:00:00 PM",
      "Rotaract Club of Unitech",
      "Rotaract Club of Modern College Ganeshkhind",
      "Rotaract Club of DPU"
    ]
]

import requests

url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
key = '&key=AIzaSyACuWf-wH4SXzPYmRDiKsakpYg4FF9OLKo'

latLong = []

for camp in data:
    newEntry = {}
    newEntry['address'] = camp[0]
    newEntry['pinCode'] = camp[1]
    newEntry['number'] = camp[2]
    newEntry['startTime'] = camp[3]
    newEntry['endTime'] = camp[4]
    newEntry['clubs'] = []
    newEntry['lat'] = 0
    newEntry['lng'] = 0
    newEntry['date'] = "12/03/2022"

    for i in range(5, len(camp)):
        newEntry['clubs'] .append(camp[i])

    address = newEntry['address']
    splitAddress = address.split()
    newAddress = ""
    for word in address:
        newAddress += word + '+'
    response = requests.get(url+newAddress+key)
    resp_json_payload = response.json()

    try:
        newEntry['lat'] = resp_json_payload['results'][0]['geometry']['location']['lat']
        newEntry['lng'] = resp_json_payload['results'][0]['geometry']['location']['lng']
    except:
        print(address + " has an error")


    latLong.append(newEntry)

print(latLong)