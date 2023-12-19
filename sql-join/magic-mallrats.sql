SELECT "firstName", "lastName"
FROM "customers"
JOIN "rentals" USING ("customerId")
JOIN "inventory" using ("inventoryId")
JOIN "films" USING ("filmId")
WHERE "title" = 'Magic Mallrats';
