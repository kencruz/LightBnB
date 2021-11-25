SELECT reservations.*, properties.*, AVG(property_reviews.rating) as average_rating
FROM property_reviews
JOIN properties ON property_id = properties.owner_id
JOIN reservations ON reservation_id = reservations.id
JOIN users ON property_reviews.guest_id = users.id
WHERE users.id = 1 
AND end_date < now()::date
GROUP BY reservations.id, properties.id
ORDER BY start_date
LIMIT 10;
