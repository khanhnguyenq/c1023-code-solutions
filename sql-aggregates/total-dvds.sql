select "f"."title", count("inventoryId") as "countOfDVD"
from "films" as "f"
join "inventory" as "i" using ("filmId")
group by "filmId"
order by "f"."title";
