SELECT name,
       round(( 6371 * acos( cos( radians(35.88445510796) ) * cos( radians(lat) ) * cos( radians(long) - radians(128.61420749660) ) + sin( radians(35.88445510796) ) * sin(radians(lat)) ) ),4)
       AS distance
FROM [dbo].[hospitalbedTBL]
ORDER BY distance