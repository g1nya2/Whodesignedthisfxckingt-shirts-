SELECT TOP(1) lath AS latitude, longh AS longitude
FROM [dbo].[aminfoTBL];

WITH aminfo AS (
    SELECT TOP(1) lath AS latitude, longh AS longitude
    FROM [dbo].[aminfoTBL]
)
UPDATE h
SET distance = round(( 6371 * acos( cos( radians(aminfo.latitude) ) * cos( radians(h.lat) ) * cos( radians(h.long) - radians(aminfo.longitude) ) + sin( radians(aminfo.latitude) ) * sin(radians(h.lat)) ) ),4)
FROM [dbo].[hospitalbedTBL] h, aminfo;
SELECT * FROM [dbo].[hospitalbedTBL]
ORDER BY distance ASC;

