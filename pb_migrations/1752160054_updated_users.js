/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3370358825",
    "max": 1000,
    "min": 0,
    "name": "personalDescription",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1587448267",
    "max": 100,
    "min": 0,
    "name": "location",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text250543888",
    "max": 100,
    "min": 0,
    "name": "preferredClub",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1852720168",
    "max": 30,
    "min": 0,
    "name": "preferredBoat",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "select3650379559",
    "maxSelect": 1,
    "name": "preferredTime",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "morning",
      "afternoon",
      "allDay"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("text3370358825")

  // remove field
  collection.fields.removeById("text1587448267")

  // remove field
  collection.fields.removeById("text250543888")

  // remove field
  collection.fields.removeById("text1852720168")

  // remove field
  collection.fields.removeById("select3650379559")

  return app.save(collection)
})
