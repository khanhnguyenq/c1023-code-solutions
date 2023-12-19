select count("countryId"), "countries"."name" as "country"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId"
order by "country";
