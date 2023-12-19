SELECT "title", "releaseYear", "genres"."name" as "movieGenre"
FROM "films"
JOIN "filmGenre" USING ("filmId")
JOIN "genres" USING ("genreId")
where "title" = 'Boogie Amelie';
