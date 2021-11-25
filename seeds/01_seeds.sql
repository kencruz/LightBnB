INSERT INTO users (name, email, password)
VALUES ('steve', 'steve@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('mike', 'mike@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('jane', 'jane@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('erin', 'erin@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms,country, street, city, province, post_code)
VALUES (1, 'some place', 'description', 'thumbnail_photo_url.jpg', 'cover_photo_url.jpg', 123, 1, 1, 2, 'Canada', '123 fake street', 'fake town', 'ON', '1B2C3D'),
(2, 'his place', 'description', 'thumbnail_photo_url.jpg', 'cover_photo_url.jpg', 123, 1, 1, 2, 'Canada', '321 fake street', 'fake city', 'ON', 'L4K123'),
(3, 'her place', 'description', 'thumbnail_photo_url.jpg', 'cover_photo_url.jpg', 123, 1, 1, 2, 'Canada', '881 fake street', 'fake island', 'ON', '8L3SKA'),
(4, 'their place', 'description', 'thumbnail_photo_url.jpg', 'cover_photo_url.jpg', 123, 1, 1, 2, 'Canada', '123 fake street', 'fake town', 'ON', '1B2C3D');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2021-10-29', '2021-10-31', 4, 2),
('2021-11-01', '2021-11-10', 1, 4),
('2021-11-18', '2021-11-20', 2, 3),
('2021-10-09', '2021-10-17', 3, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (2, 4, 1, 5, 'message'),
(4, 1, 2, 3, 'message'),
(3, 2, 3, 4, 'message'),
(1, 3, 4, 2, 'message');

