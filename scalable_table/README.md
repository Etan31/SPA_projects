# This is to learn sql and scalable table.
Uses a flexible EAV (Entity-Attribute-Value) model to support arbitrary columns without altering tables.
It need to add first entities, then add attributes on the entities added, and lastly you can add values to those entities and attributes you've added. 

## Start locally:
```bash
node server.js
```

## Notes: 
- Attributes `name` should be unique.
- Entities `id` is primary key, therefore needed to be unique. 
